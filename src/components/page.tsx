import { JetBrains_Mono, Roboto } from "next/font/google";
import Navbar from "./navbar";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains"
});

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-roboto"
});

type Props = {
    children: any,
    screen?: boolean
}

export default function Page({ children, screen = true }: Props) {
    return (
        <div className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto ${screen ? "h-screen" : ""}`}>
            <Navbar />
            {children}
        </div>
    );
}