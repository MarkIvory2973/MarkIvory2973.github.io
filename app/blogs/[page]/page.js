import { Content, Header, Title, Date, Markdown } from '@/components/content'
import { Actions, PrevButton, NextButton } from '@/components/actions'
import blog from '@/blog/blog'

export default function Page({ params }) {
  const { page } = params

  return (
    <div className='h'>
      <h2>Blogs</h2>
      {Array.from({ length: 5 }, (_, i) => blog.length - ((page - 1) * 5 + i)).map((id, _) => id > 0 && (
        <Content key={id}>
          <Header id={id} type='blog' alt={blog[`${id}`].header} />
          <Title id={id} type='blog'>{blog[`${id}`].title}</Title>
          <Date>{blog[`${id}`].date}</Date>
          <Markdown>{blog[`${id}`].preview}</Markdown>
        </Content>
      ))}
      <Actions>
        <PrevButton type='blogs' page={page} />
        <NextButton type='blogs' page={page} />
      </Actions>
    </div>
  )
}

export async function generateStaticParams() {
  return Array.from({ length: Math.ceil(blog.length / 5) }, (_, i) => {return {page: `${i + 1}`}})
}
