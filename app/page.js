import { Content, Header, Title, Date, Markdown } from '@/components/content'
import blog from '@/blog/blog'

export default function Page() {
  return (
    <div className='h'>
      <h2>Latest Blogs</h2>
      {Array.from({ length: 3 }, (_, i) => blog.length - i).map((id, _) => id > 0 && (
        <Content key={id}>
          <Header id={id} type='blog' alt={blog[`${id}`].header} />
          <Title id={id} type='blog'>{blog[`${id}`].title}</Title>
          <Date>{blog[`${id}`].date}</Date>
          <Markdown>{blog[`${id}`].preview}</Markdown>
        </Content>
      ))}
    </div>
  )
}
