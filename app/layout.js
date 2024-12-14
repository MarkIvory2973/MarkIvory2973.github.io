import './globals.css'
import NavBar from '@/components/navbar'
import About from '@/components/about'
import Series from '@/components/series'

export const metadata = {
  title: 'Mark\'s Blog',
  description: 'Mark\'s sketchbook records whimsical ideas. Mainly mathematics, technology, and Python.',
  themeColor: '#191919'
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
            <h2>Series</h2>
            <Series />
          </div>
        </main>
      </body>
    </html>
  )
}
