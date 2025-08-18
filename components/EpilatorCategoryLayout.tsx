import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface CategoryCard {
  title: string
  description: string
  type: 'cleaning' | 'battery' | 'review' | 'usage'
  href: string
}

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  description?: string
}

export default function EpilatorCategoryLayout({ posts, title, description }: Props) {
  // Filter posts by content type
  const getPostsByType = (type: string) => {
    return posts.filter((post) => post.tags.includes(type))
  }

  const categoryCards: CategoryCard[] = [
    {
      title: 'How to Clean',
      description: 'Step-by-step guide to clean and maintain your epilator',
      type: 'cleaning',
      href: getPostsByType('cleaning')[0]?.slug || '#',
    },
    {
      title: 'Battery Replacement',
      description: 'Learn how to replace the battery when it no longer holds charge',
      type: 'battery',
      href: getPostsByType('battery')[0]?.slug || '#',
    },
    {
      title: 'Product Review',
      description: 'Detailed review and comparison with other models',
      type: 'review',
      href: getPostsByType('review')[0]?.slug || '#',
    },
    {
      title: 'Usage Guide',
      description: 'Tips and tricks for the best epilation results',
      type: 'usage',
      href: getPostsByType('usage')[0]?.slug || '#',
    },
  ]

  return (
    <div className="w-full">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 px-4 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          {description && (
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>

        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card) => (
            <Link
              key={card.type}
              href={`/blog/${card.href}`}
              className={`${
                card.href === '#' ? 'cursor-not-allowed opacity-50' : ''
              } block rounded-lg border border-gray-200 p-6 hover:border-primary-500 dark:border-gray-700`}
            >
              <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                {card.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
            </Link>
          ))}
        </div>

        <div className="px-4 py-8">
          <h2 className="mb-4 text-2xl font-bold">All Articles</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
              <li key={post.slug} className="py-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
