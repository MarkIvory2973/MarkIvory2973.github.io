import Link from 'next/link'
import styles from '@/components/actions.module.css'
import blog from '@/blog/blog'

function Actions(props) {
  return (
    <div className={styles.actions}>
      {props.children}
    </div>
  )
}

function PrevButton(props) {
  if (props.page - 1 > 0) {
    return (
      <Link href={`/${props.type}/${props.page - 1}`}>&lt; Prev</Link>
    )
  }
}

function Message(props) {
  return (
    <Link href='/'>{props.children}</Link>
  )
}

function NextButton(props) {
  if (props.page - 1 + 2 <= Math.ceil(blog.length / 5)) {
    return (
      <Link href={`/${props.type}/${props.page - 1 + 2}`}>Next &gt;</Link>
    )
  }
}

export { Actions, PrevButton, NextButton, Message }
