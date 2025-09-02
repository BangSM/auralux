import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Auralux",
  description: "THE COMPLETAION OF SPACE, THE HARMONY OF LIFE",
  keywords: ["AURALUX", "Premium Blind", "블라인드", "오라럭스", "space-27"],
  openGraph: {
    title: "AURALUX",
    description: "THE COMPLETAION OF SPACE, THE HARMONY OF LIFE",
    images: "https://auralux.vercel.app/_next/image?url=%2Fimages%2Fimg_main_header.png&w=3840&q=75",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
