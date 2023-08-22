import { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Anshul Kanwar",
  description: "Anshul Kanwar's Portfolio",
  themeColor: "#171618",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient-radial text-violet`}
      >
        {children}
      </body>
    </html>
  );
}
