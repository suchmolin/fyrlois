import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fyr Lois",
  description: "Fyr Lois Language Institute",
};

export default function RootLayout({ children }) {
  return (
    <html translate="no" lang="es">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-73J11X4LF0" />
    </html>
  );
}
