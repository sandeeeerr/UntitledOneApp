import '@/styles/app.scss'
import { Inter } from 'next/font/google'
import Header from '@module/Header/Header';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">

      <body suppressHydrationWarning={true} className={` overflow-x-hidden bg-background ${inter.className}`}>
        <Header />
        <div className='max-w-6xl mx-auto px-4 mt-16 lg:mt-20' suppressHydrationWarning={true}>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}