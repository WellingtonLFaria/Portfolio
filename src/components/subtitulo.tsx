type Props = {
    children?: string
    className?: string
}

export default function Subtitulo({children, className}: Props) {
    return (
        <h2 className={`text-3xl font-jetbrains text-[#F2283C] ${className}`}>{children}</h2>
    )
}