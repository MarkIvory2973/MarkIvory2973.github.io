export default function manifest() {
  return {
    name: 'Mark\'s Blog',
    short_name: 'Mark\'s Blog',
    description: 'Mark\'s sketchbook records whimsical ideas. Mainly mathematics, technology, and Python.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0e0e0e',
    theme_color: '#191919',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48 192x192 256x256',
        type: 'image/x-icon',
      },
      {
        src: '/favicon_512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/favicon_192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  }
}