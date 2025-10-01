import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import MainHeader from "../components/MainHeader"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kopi Manis",
  description: "Aplikasi pemesanan kopi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
