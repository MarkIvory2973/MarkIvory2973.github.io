import './globals.css'
import NavBar from '@/components/navbar'
import About from '@/components/about'

export const metadata = {
  title: 'Mark\'s Blog',
  description: 'Welcome to my blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
          <div className='h'>
            <h2>About</h2>
            <About />
          </div>
        </main>
      </body>
    </html>
  )
}
