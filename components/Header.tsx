import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="w-full bg-beige-50 dark:bg-gray-950">
      {/* Top bar with logo and controls */}
      <div className="w-full">
        <div className="flex items-center justify-between border-b border-beige-100 px-4 py-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="w-full bg-white/50 dark:bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <nav className="flex justify-center overflow-x-auto py-4">
            <div className="flex space-x-8">
              <Link
                href="/silk-epil-5"
                className="whitespace-nowrap text-base font-medium tracking-wide text-beige-800 hover:text-primary-500"
              >
                Silk-épil 5
              </Link>
              <Link
                href="/silk-epil-7"
                className="whitespace-nowrap text-base font-medium tracking-wide text-beige-800 hover:text-primary-500"
              >
                Silk-épil 7
              </Link>
              <Link
                href="/silk-epil-9"
                className="whitespace-nowrap text-base font-medium tracking-wide text-beige-800 hover:text-primary-500"
              >
                Silk-épil 9
              </Link>
              <Link
                href="/silk-epil-9-flex"
                className="whitespace-nowrap text-base font-medium tracking-wide text-beige-800 hover:text-primary-500"
              >
                Silk-épil 9 Flex
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
