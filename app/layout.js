import { Geist } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mitrox Gym Oy – Fitness Gym',
  description:
    'Transform your body and elevate your mind at Mitrox Gym Oy. Memberships, personal training, group classes, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
