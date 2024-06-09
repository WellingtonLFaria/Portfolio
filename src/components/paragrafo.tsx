type Props = {
    children?: string
    className?: string
}

export default function Paragrafo({children, className}: Props) {
    return (
        <p className={`text-[#AAAAAA] text-justify font-roboto ${className}`}>{children}</p>
    )
}