import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    domains: [
      'raw.githubusercontent.com'
    ]
  },
  ...(process.env.NEXT_STATIC_EXPORT === "true" && { output: "export" })
}

const options = {
  theme: 'github-dark',
  keepBackground: false
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)