type Props = {
    children?: string
    className?: string
}

export default function Titulo({children, className}: Props) {
    return (
        <h1 className={`text-4xl font-jetbrains text-[#875AFB] ${className}`}>{children}</h1>
    )
}