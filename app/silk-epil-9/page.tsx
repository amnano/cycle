import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import EpilatorCategoryLayout from '@/components/EpilatorCategoryLayout'

export default function SilkEpil9Page() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags.includes('silk-epil-9')))
  )

  return (
    <EpilatorCategoryLayout
      posts={posts}
      title="Braun Silk-épil 9"
      description="Premium epilator with wider head for faster epilation. Find guides and tutorials for your Silk-épil 9."
    />
  )
}
