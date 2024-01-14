import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const plusJakartaSans = PlusJakartaSans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next Commerce',
	description: 'Basic e-commerce application using Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	)
}
