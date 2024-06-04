import logo from "../../public/images/logo.svg";


export default function Logo({ className }: { className?: string }) {
    const handleLogoClick = () => {
        window.location.replace("/");
    }
    return (
        <svg
            width="90"
            height="67.96"
            viewBox="0 0 178 135"
            xmlns="http://www.w3.org/2000/svg"
            className={"fill-none stroke-[#AAAAAA] " + className}
            onClick={handleLogoClick} >

            <path
                d="M4 4.03593C19.6524 36.5323 47.8434 105.643 35.3885 122.116C49.7016 103.165 78.579 44.1249 75.8168 39.9337C79.3324 45.2182 104.443 117.378 100.928 122.116C104.945 117.196 108.21 1.66704 124.783 4.03593C141.356 6.40482 122.021 118.289 111.474 122.116C133.572 122.116 171.238 137.605 174 122.116"
                strokeWidth="7" />

            <path
                d="M58.2038 134C63.4235 93.7144 68.4579 11.8748 46.8384 6.80132C25.2189 1.72786 81.2713 4.68738 112 6.80132"
                strokeWidth="7" />

            <path
                d="M62 45C68.0866 36.7216 84.0078 21.5788 99 27.2347"
                strokeWidth="7" />
        </svg>
    );
}