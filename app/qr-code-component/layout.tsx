import { Outfit } from 'next/font/google';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'QR Code Component',
}
 
// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  )
}