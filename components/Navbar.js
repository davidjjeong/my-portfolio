import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar () {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const Menu = ({ulClassName, liClassName}) => {
        return (
            <ul className={ulClassName}>
                <li className={liClassName}>
                    <Link href="/" 
                        className={router.pathname == "/" ? "nav-link active-link" : "nav-link"}
                    >
                        Home
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={liClassName}>
                    <Link href="/about" 
                        className={router.pathname == "/about" ? "nav-link active-link" : "nav-link"}
                    >
                        About
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={liClassName}>
                    <Link href="/interests" 
                        className={router.pathname == "/interests" ? "nav-link active-link" : "nav-link"}
                    >
                        Interests
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={liClassName}>
                    <Link href="/projects" 
                        className={router.pathname == "/projects" ? "nav-link active-link" : "nav-link"}
                    >
                        Projects
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={liClassName}>
                    <Link href="/experience" 
                        className={router.pathname == "/experience" ? "nav-link active-link" : "nav-link"}
                    >
                        Experience
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={liClassName}>
                    <Link href="/contact" 
                        className={router.pathname == "/contact" ? "nav-link active-link" : "nav-link"}
                    >
                        Contact
                        <div className="hover-underline" />
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className="w-full h-20 py-10 px-20 lg:px-14">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg">
                        David Jeong
                    </h1>
                    <p className="text-base md:text-sm text-gray-700 mt-1">
                        B.S. CompSci, StatSci at Duke University
                    </p>
                </div>
                <Menu ulClassName="gap-x-11 flex lg:hidden" />
                <button className="small-screen-navbar hidden lg:block" onClick={handleClick}>
                    <div className={`${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
                    <div className={`two ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`${isOpen ? '-rotate-45 -translate-y-[10px] w-[30px]' : 'w-[25px]'}`} />
                </button>
            </div>
            { isOpen ? 
                <Menu ulClassName="dropdown-menu" />
            : null }
        </div>
    )
}