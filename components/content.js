import Link from 'next/link'
import styles from './content.module.css'
import 'github-markdown-css/github-markdown-dark.css'

function Content(props) {
  return (
    <div className={styles.v}>
      {props.children}
    </div>
  )
}

function Header(props) {
  if (props.id > 0) {
    return (
      <img className={styles.header} src={`/${props.id}.webp`} alt={props.alt} />
      )
  }
}

function Title(props) {
  if (props.id > 0) {
    return (
      <Link className={styles.title} href={`/${props.type}/${props.id}`}>{props.children}</Link>
    )
  }
}

function Date(props) {
  return (
    <p className={styles.date}>{props.children}</p>
  )
}

function Markdown(props) {
  return (
    <article className='markdown-body'>
      {props.children}
    </article>
  )
}

export { Content, Header, Title, Date, Markdown };
