import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="hierarchy-primary text-neutral-900 dark:text-neutral-50 sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
