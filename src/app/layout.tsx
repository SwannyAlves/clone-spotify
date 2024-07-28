import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import AuthProvider from "./AuthProvider"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotify",
  description: "- Clone",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-zinc-900 text-zinc-200`}  >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html >
  )
}
