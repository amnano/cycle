import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import EpilatorCategoryLayout from '@/components/EpilatorCategoryLayout'

export default function SilkEpil7Page() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags.includes('silk-epil-7')))
  )

  return (
    <EpilatorCategoryLayout
      posts={posts}
      title="Braun Silk-épil 7"
      description="Advanced epilator with comfort features. Find guides and tutorials for your Silk-épil 7."
    />
  )
}
