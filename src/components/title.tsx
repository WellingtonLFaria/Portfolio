type Props = {
  children?: string
  className?: string
}

export default function Title({ children, className }: Props) {
  return (
    <h1
      className={`text-2xl xl:text-3xl 2xl:text-5xl font-jetbrains text-[#875AFB] ${className}`}
    >
      {children}
    </h1>
  )
}
