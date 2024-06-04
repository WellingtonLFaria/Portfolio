import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="p-3 text-xl flex justify-between items-center font-jetbrains ">
            <Logo className="w-20 hover:stroke-[#F2283C] hover:scale-110 transition-all ease-in-out cursor-pointer"/>
            <div className="gap-4 flex">
                <a href="/about" className="hover:text-[#875AFB] hover:scale-110 transition-all ease-in-out">About</a>
                <a href="/projects" className="hover:text-[#875AFB] hover:scale-110 transition-all ease-in-out">Projects</a>
                <a href="/contact" className="hover:text-[#875AFB] hover:scale-110 transition-all ease-in-out">Contact</a>
            </div>
        </nav>
    );
}