import Link from 'next/link'
import styles from './series.module.css'
import blog from '@/blog/blog'

function Series() {
  return (
    <div id={styles.series} className={styles.v}>
        <h3>人工智能</h3>
        <div className={styles.links}>
            <Link href='/blog/7' aria-label={blog[7].title}>{blog[7].title}</Link>
            <Link href='/blog/5' aria-label={blog[5].title}>{blog[5].title}</Link>
        </div>
        <h3>数学</h3>
        <div className={styles.links}>
            <Link href='/blog/9' aria-label={blog[9].title}>{blog[9].title}</Link>
            <Link href='/blog/4' aria-label={blog[4].title}>{blog[4].title}</Link>
            <Link href='/blog/3' aria-label={blog[3].title}>{blog[3].title}</Link>
        </div>
        <h3>科学上网</h3>
        <div className={styles.links}>
            <Link href='/blog/8' aria-label={blog[8].title}>{blog[8].title}</Link>
            <Link href='/blog/6' aria-label={blog[6].title}>{blog[6].title}</Link>
            <Link href='/blog/1' aria-label={blog[1].title}>{blog[1].title}</Link>
        </div>
    </div>
  );
}

export default Series;
