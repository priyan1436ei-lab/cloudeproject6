import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudWait AI",
  description: "Intelligent queue optimization and wait-time prediction system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
