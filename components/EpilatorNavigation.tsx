import Link from '@/components/Link'
import { usePathname } from 'next/navigation'
import { epilatorModels } from '@/data/epilatorTags'

export default function EpilatorNavigation() {
  const pathname = usePathname()

  return (
    <nav className="w-full overflow-x-auto bg-beige-50 dark:bg-gray-900/50">
      <div className="w-full px-4">
        <div className="flex justify-center space-x-8 py-4">
          {epilatorModels.map((model) => {
            const href = `/${model}`
            const isActive = pathname === href

            return (
              <Link
                key={model}
                href={href}
                className={`${
                  isActive
                    ? 'font-semibold text-primary-500'
                    : 'text-beige-800 hover:text-primary-500'
                } whitespace-nowrap font-medium`}
              >
                {model
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
