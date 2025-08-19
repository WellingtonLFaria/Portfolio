type Props = {
  children?: string
  className?: string
}

export default function Paragraph({ children, className }: Props) {
  return (
    <p
      className={`text-white text-lg xl:text-xl 2xl:text-2xl text-justify font-roboto ${className}`}
    >
      {children}
    </p>
  )
}
