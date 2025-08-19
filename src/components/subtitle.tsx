type Props = {
  children?: string
  className?: string
}

export default function Subtitle({ children, className }: Props) {
  return (
    <h2
      className={`text-2xl xl:text-2xl 2xl:text-5xl font-jetbrains text-[#F2283C] ${className}`}
    >
      {children}
    </h2>
  )
}
