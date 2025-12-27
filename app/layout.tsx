import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diginak.ai",
  description: "Job-state driven freight workflow engine",
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


