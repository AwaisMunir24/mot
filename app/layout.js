import { Unbounded, Outfit } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const display = Unbounded({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Outfit({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "PRIME MOT & SERVICE LTD | MOT, Servicing & Used Cars in Bournemouth",
  description: "MOT testing, car servicing, repairs and used car sales and purchases in Bournemouth, BH6 5PS.",
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#12042b" };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body><Nav />{children}<Footer /></body>
    </html>
  );
}
