import '../styles/globals.css'
import { Gabarito } from 'next/font/google'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
    title: "Anime",
    description: "List anime Indonesia"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${gabarito.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}