import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import EpilatorCategoryLayout from '@/components/EpilatorCategoryLayout'

export default function SilkEpil5Page() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags.includes('silk-epil-5')))
  )

  return (
    <EpilatorCategoryLayout
      posts={posts}
      title="Braun Silk-épil 5"
      description="Entry-level epilator with essential features. Find guides and tutorials for your Silk-épil 5."
    />
  )
}
