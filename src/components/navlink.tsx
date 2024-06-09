type Props = {
    href: string,
    children: string,
    className?: string
}

export default function Navlink({ href, children, className }: Props) {
    return (
        <a href={href} className={`text-white hover:text-[#F2283C] hover:scale-110 transition-all ease-in-out ${className}`}>{children}</a>
    );
}