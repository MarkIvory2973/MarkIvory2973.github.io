import Link from 'next/link'
import styles from './series.module.css'

function Series() {
  return (
    <div id={styles.series} className={styles.v}>
        <h3>人工智能</h3>
        <div className={styles.links}>
            <Link href='/blog/7' aria-label='神经网络如何自动调整'>神经网络如何自动调整</Link>
            <Link href='/blog/5' aria-label='神经网络的本质'>神经网络的本质</Link>
        </div>
        <h3>科学上网</h3>
        <div className={styles.links}>
            <Link href='/blog/8' aria-label='如何安全地科学上网'>如何安全地科学上网</Link>
            <Link href='/blog/6' aria-label='科学上网入门'>科学上网入门</Link>
            <Link href='/blog/1' aria-label='为什么你需要抛弃 Clash for Windows'>为什么你需要抛弃 Clash for Windows</Link>
        </div>
    </div>
  );
}

export default Series;
