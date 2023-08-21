import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Anshul Kanwar",
  description: "Anshul Kanwar's Portfolio",
  themeColor: "#171618",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-radial text-violet">
        {children}
      </body>
    </html>
  );
}
