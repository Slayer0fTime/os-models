import type { Metadata } from 'next';
import '@/app/ui/global.css';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer/footer';
import { raleway } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'One Step Models',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={raleway.className}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
