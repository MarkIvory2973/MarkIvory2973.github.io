import Link from 'next/link'
import styles from './navbar.module.css'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/blogs/1">Blogs</Link></li>
        <li><Link href="/" id='title'>Mark&apos;s Blog</Link></li>
        <li><Link href="/blogs/1">Tools</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
