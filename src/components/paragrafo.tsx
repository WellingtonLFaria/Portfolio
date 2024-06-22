type Props = {
    children?: string
    className?: string
}

export default function Paragrafo({children, className}: Props) {
    return (
        <p className={`text-white text-2xl xl:text-2xl 2xl:text-4xl text-justify font-roboto ${className}`}>{children}</p>
    )
}