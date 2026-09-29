import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "AJ Kurt A. De Los Reyes | Portfolio",
  description:
    "Portfolio of AJ Kurt A. De Los Reyes, an IT student and aspiring web developer from the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
