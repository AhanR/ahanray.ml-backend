import './globals.css'
import { Bree_Serif } from 'next/font/google'

const fontFamily = Bree_Serif({
  weight: '400',
  subsets : ['latin']
})

export const metadata = {
  title: 'Ahans Portfolio Backend',
  description: 'A backend platform to feed data into the main portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>{children}</body>
    </html>
  )
}
