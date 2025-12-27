import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diginak.ai",
  description: "Diginak.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

