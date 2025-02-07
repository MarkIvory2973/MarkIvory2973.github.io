import './globals.css'
import 'katex/dist/katex.min.css'
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
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
