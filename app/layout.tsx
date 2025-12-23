import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suprform Next.js",
  description: "Marketing Repository for suprform library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
