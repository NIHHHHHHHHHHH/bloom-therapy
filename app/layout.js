import './globals.css'

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA',
  description: 'Licensed clinical psychologist in Santa Monica specializing in anxiety, trauma, and burnout therapy. In-person and telehealth sessions available.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}