import Link from 'next/link'
import styles from './about.module.css'

function About() {
  return (
    <div id={styles.about} className={styles.v}>
        <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/114793567' alt='Avatar' />
        <h3 className={styles.name}>Mark Ivory</h3>
        <Link href='https://github.com/MarkIvory2973'>@MarkIvory2973</Link>
    </div>
  );
}

export default About;
