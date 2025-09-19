// app/api/register/route.ts
import {NextRequest, NextResponse} from "next/server";
import {google} from "googleapis";

// In-memory store for locking slots to prevent race conditions.
// A Set is used to store unique keys for slots currently being processed.
const lockedSlots = new Set<string>();

export async function POST(req: NextRequest) {
  const { modelName, modelAge, modelSurname, phoneNumber, city, date, time } = await req.json();

  // Create a unique key for the selected slot to manage locking
  const slotKey = `${city}-${date}-${time}`;

  // Check if the slot is already being processed
  if (lockedSlots.has(slotKey)) {
    return NextResponse.json({ ok: false, error: "This slot is currently being booked. Please try again in a moment." }, { status: 409 }); // 409 Conflict
  }

  try {
    // Lock the slot
    lockedSlots.add(slotKey);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      },
      // Scope needs to be read/write for this endpoint
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_ID!;
    const range = "'Free Slots'!A2:D";

    // 1. Read the current state of the slots sheet
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = getResponse.data.values as string[][] || [];

    // 2. Find the specific row for the selected slot
    const rowIndex = values.findIndex(row => row[0] === city && row[1] === date && row[2] === time);

    if (rowIndex === -1) {
      throw new Error("The selected slot could not be found.");
    }

    const row = values[rowIndex];
    const currentAvailability = parseInt(row[3], 10) || 0;

    // 3. Check if there are any spots left
    if (currentAvailability <= 0) {
      throw new Error("The selected slot is no longer available.");
    }

    // 4. Decrement the number of available spots
    const newAvailability = currentAvailability - 1;
    const sheetRowIndex = rowIndex + 2; // +2 because sheet is 1-indexed and our range starts at row 2

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'Free Slots'!D${sheetRowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
          values: [[newAvailability]],
      },
    });

    // 5. Append the registration details to the 'Registration' sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Registration!A2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
          values: [[modelName, modelSurname, modelAge, phoneNumber, city, date, time]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e.message || "An unexpected error occurred." }, { status: 500 });
  } finally {
    // 6. Unlock the slot, regardless of success or failure
    lockedSlots.delete(slotKey);
  }
}
