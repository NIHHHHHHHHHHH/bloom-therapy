import './globals.css'

export const metadata = {
  title: 'Lilac Template - Therapy for Adults',
  description: 'Therapy for Adults in Minneapolis, MN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}