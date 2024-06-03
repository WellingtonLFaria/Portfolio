import Image from "next/image";
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-8 text-white items-center font-jetbrains fixed w-screen h-36">
            <Logo className="hover:cursor-pointer hover:scale-110 transition-all ease-in-out hover:stroke-[#F2283C]" />
            <div className="text-2xl flex gap-10">
                <a href="#projects" className="hover:text-[#875afb] transition-all ease-in-out hover:scale-110">Projects</a>
                <a href="#contact" className="hover:text-[#875afb] transition-all ease-in-out hover:scale-110">Contact</a>
            </div>
        </nav>
    );
}