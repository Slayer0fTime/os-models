// app/api/slots/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

// Updated Slot type to include the number of available spots
type Slot = { city: string; date: string; time: string; available: number };

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Update the range to include the new column D for available spots
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID!,
      range: "'Free Slots'!A2:D",
    });

    const values = (data.values ?? []) as string[][];

    const slots: Slot[] = values
      // Ensure row has all 4 columns and parse the 'available' count
      .map(r => ({
          city: r[0]?.trim() || '',
          date: r[1]?.trim() || '',
          time: r[2]?.trim() || '',
          available: parseInt(r[3], 10) || 0
      }))
      // Filter out rows that are incomplete or have no available spots
      .filter(s => s.city && s.date && s.time && s.available > 0);

    return NextResponse.json(slots, {
      headers: { "Cache-Control": "public, s-maxage=60" },
    });
  } catch (e: any) {
    console.error("slots error:", e?.response?.data || e);
    return NextResponse.json({ ok: false, error: "Failed to load slots" }, { status: 500 });
  }
}
