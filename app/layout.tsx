import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './provider'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Melvic Sosa | Portfolio',
    description: 'Fullstack Developer',
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
        shortcut: ['/favicon.svg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/*
                    Enforce a consistent dark default and ignore any legacy
                    localStorage value (from older site versions) by using a
                    new storage key and disabling system theme.
                */}
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    storageKey='ms-theme-v1'
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
