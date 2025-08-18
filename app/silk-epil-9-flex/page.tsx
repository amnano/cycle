import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import EpilatorCategoryLayout from '@/components/EpilatorCategoryLayout'

export default function SilkEpil9FlexPage() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags.includes('silk-epil-9-flex')))
  )

  return (
    <EpilatorCategoryLayout
      posts={posts}
      title="Braun Silk-épil 9 Flex"
      description="Top-of-the-line epilator with flexible head for optimal skin contact. Find guides and tutorials for your Silk-épil 9 Flex."
    />
  )
}
