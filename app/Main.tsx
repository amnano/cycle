import Link from '@/components/Link'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <div className="w-full">
      {/* Hero section with clear value proposition */}
      <div className="bg-gradient-to-b from-beige-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
        <div className="px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold text-gray-900 dark:text-white">
            Fix Your Braun Epilator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Step-by-step video guides for cleaning, maintenance, and repairs
          </p>
        </div>
      </div>

      {/* Model Selection Grid */}
      <div className="px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold">Select Your Model</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Silk-épil 5',
              subtitle: 'Entry Level',
              description: 'Essential features, perfect for beginners',
              href: '/silk-epil-5',
              image: '/static/images/silk-epil-5/cover.jpg',
            },
            {
              title: 'Silk-épil 7',
              subtitle: 'Mid Range',
              description: 'Advanced comfort features',
              href: '/silk-epil-7',
              image: '/static/images/silk-epil-7/cover.jpg',
            },
            {
              title: 'Silk-épil 9',
              subtitle: 'Premium',
              description: 'Wider head, faster epilation',
              href: '/silk-epil-9',
              image: '/static/images/silk-epil-9/cover.jpg',
            },
            {
              title: 'Silk-épil 9 Flex',
              subtitle: 'Top of the Line',
              description: 'Flexible head technology',
              href: '/silk-epil-9-flex',
              image: '/static/images/silk-epil-9-flex/cover.jpg',
            },
          ].map((model) => (
            <Link
              key={model.title}
              href={model.href}
              className="group rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image src={model.image} alt={model.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-1 text-sm font-medium text-primary-500">{model.subtitle}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {model.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{model.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="bg-gray-50 px-4 py-12 dark:bg-gray-900">
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold">
          What Do You Need Help With?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'How to Clean',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ),
              description: 'Step-by-step cleaning guides',
              tag: 'Video Guide',
              href: '/blog/tags/cleaning',
            },
            {
              title: 'Battery Issues',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              description: 'Battery replacement tutorials',
              tag: 'Video Guide',
              href: '/blog/tags/battery',
            },
            {
              title: 'Product Reviews',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ),
              description: 'Compare models and features',
              tag: 'Expert Review',
              href: '/blog/tags/review',
            },
          ].map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group flex flex-col items-center rounded-xl bg-white p-6 text-center transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="mb-4 text-primary-500">{action.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {action.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{action.description}</p>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">
                {action.tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
