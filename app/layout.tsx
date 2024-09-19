import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning for php",
  description: "Learning environment for another project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
