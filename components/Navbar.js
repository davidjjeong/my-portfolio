import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar () {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const closeHamburger = () => {
            setIsOpen(false)
        }

        router.events.on('routeChangeStart', closeHamburger);

        return () => router.events.off('routeChangeStart', closeHamburger);
    }, [router.events]);

    const Menu = ({ulClassName, liClassName, liActiveClass, LinkInactiveClass, LinkActiveClass}) => {
        return (
            <ul className={ulClassName}>
                <li className={router.pathname == "/" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/" 
                        className={router.pathname == "/" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        Home
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={router.pathname == "/about" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/about" 
                        className={router.pathname == "/about" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        About
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={router.pathname == "/projects" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/projects" 
                        className={router.pathname == "/projects" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        Projects
                        <div className="hover-underline" />
                    </Link>
                </li>
                <li className={router.pathname == "/contact" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/contact" 
                        className={router.pathname == "/contact" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        Contact
                        <div className="hover-underline" />
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className="w-full h-20 py-10 pl-20 pr-[19%] lg:px-14">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg">
                        David Jeong
                    </h1>
                    <p className="text-base md:text-sm text-gray-700 mt-1">
                        B.S. CompSci, StatSci at Duke University
                    </p>
                </div>
                <Menu ulClassName="gap-x-11 flex lg:hidden" LinkInactiveClass="nav-link" LinkActiveClass="active-link" />
                <button className="small-screen-navbar hidden lg:block" onClick={handleClick}>
                    <div className={`${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
                    <div className={`two ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`${isOpen ? '-rotate-45 -translate-y-[10px] w-[30px]' : 'w-[25px]'}`} />
                </button>
            </div>
            { isOpen ? 
                <div className="flex justify-end">
                    <Menu ulClassName="dropdown-menu" liClassName="menu-item" liActiveClass="active-menu-item" />
                </div>
            : null }
        </div>
    )
}