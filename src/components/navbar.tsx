import Logo from "./logo";
import Navlink from "./navlink";

export default function Navbar() {
    return (
        <nav className="p-3 2xl:p-6 text-xl 2xl:text-4xl flex justify-between items-center font-jetbrains text-white">
            <Logo className="w-20 hover:stroke-[#F2283C] hover:scale-110 transition-all ease-in-out cursor-pointer"/>
            <div className="gap-4 2xl:gap-8 flex">
                <Navlink href="/about">About</Navlink>
                <Navlink href="/projects">Projects</Navlink>
                <Navlink href="/contact">Contact</Navlink>
            </div>
        </nav>
    );
}