import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAWI Consulting | Strategic Growth for Small Businesses",
  description:
    "Expert consulting services helping small businesses scale with confidence. Strategy, operations, and growth solutions tailored to your vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans">{children}</body>
    </html>
  );
}
