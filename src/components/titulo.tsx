type Props = {
    children?: string
    className?: string
}

export default function Titulo({children, className}: Props) {
    return (
        <h1 className={`text-4xl xl:text-5xl 2xl:text-7xl font-jetbrains text-[#875AFB] ${className}`}>{children}</h1>
    )
}