import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "../components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FitFuture - Your AI Fitness Companion",
  description: "A modern fitness trainer web app with AI-powered exercise evaluation",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
