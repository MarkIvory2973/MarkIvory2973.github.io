import { Content, Header, Title, Date, Preview } from '@/components/content'
import { Actions, PrevButton, NextButton } from '@/components/actions'
import blog from '@/blog/blog'

export default function Page({ params }) {
  const { page } = params

  return (
    <div className='h'>
      <h2>Blogs</h2>
      {Array.from({ length: 5 }, (_, i) => blog.length - ((page - 1) * 5 + i)).map((id, _) => id > 0 && (
        <Content key={id}>
          <Header id={id} type='blog' />
          <Title id={id} type='blog'>{blog[`${id}`].title}</Title>
          <Date>{blog[`${id}`].date}</Date>
          <Preview>{blog[`${id}`].preview}</Preview>
        </Content>
      ))}
      <Actions>
        <PrevButton page={page} />
        <NextButton page={page} />
      </Actions>
    </div>
  )
}

export async function generateStaticParams() {
  return Array.from({ length: Math.ceil(blog.length / 5) }, (_, i) => {return {page: `${i + 1}`}})
}
