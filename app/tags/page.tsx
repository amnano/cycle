import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-neutral-200 dark:divide-neutral-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="hierarchy-primary text-neutral-900 dark:text-neutral-50 sm:text-4xl md:border-r-2 md:px-6 md:text-5xl">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap gap-3">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="flex items-center gap-1.5">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="text-xs font-semibold uppercase text-neutral-500 transition-colors duration-200 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400"
                  aria-label={`View posts tagged ${t}`}
                >
                  ({tagCounts[t]})
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
