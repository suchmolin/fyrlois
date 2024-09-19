import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fyr Lois",
  description: "Fyr Lois Language Institute",
}

export default function RootLayout({ children }) {
  return (
    <html translate="no" lang="es">
      <head>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-73J11X4LF0');
          
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
