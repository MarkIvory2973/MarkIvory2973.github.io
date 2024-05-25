import Link from 'next/link'
import styles from './series.module.css'

function Series() {
  return (
    <div id={styles.series} className={styles.v}>
        <h3>人工智能</h3>
        <div className={styles.links}>
            <Link href='/blog/5' aria-label='1. 神经网络的本质'>1. 神经网络的本质</Link>
        </div>
        <h3>科学上网</h3>
        <div className={styles.links}>
            <Link href='/blog/6' aria-label='1. 科学上网入门'>1. 科学上网入门</Link>
        </div>
    </div>
  );
}

export default Series;
