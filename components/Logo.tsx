interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Blue circle with white C */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
        <span className="text-xl font-bold leading-none text-white">C</span>
      </div>
      {/* Cyclepil text */}
      <span className="text-xl font-bold tracking-tight text-primary-500">Cyclepil</span>
    </div>
  )
}

export default Logo
