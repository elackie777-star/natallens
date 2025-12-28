import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NatalLens',
  description: 'See tomorrow’s forces before they reach you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0E1A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
