import Link from './Link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const tagSlug = slug(text)
  const displayText = text.split(' ').join('-')

  return (
    <Link
      href={`/tags/${tagSlug}`}
      className="tag inline-flex items-center rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium uppercase leading-none tracking-tight text-neutral-600 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
    >
      {displayText}
    </Link>
  )
}

export default Tag
