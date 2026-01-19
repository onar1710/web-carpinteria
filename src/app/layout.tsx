import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from '@/components/nextauth/SessionProvider'
import FloatingWhatsAppButton from '@/components/shared/FloatingWhatsAppButton'
import DemoGuard from '@/components/shared/DemoGuard'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ferrary Cucinas',
  description: 'Construcción y carpintería: cocinas, clósets y más. Remodelaciones en obra gris.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            <DemoGuard />
            {children}
            <Footer />
            <FloatingWhatsAppButton />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  )
}
