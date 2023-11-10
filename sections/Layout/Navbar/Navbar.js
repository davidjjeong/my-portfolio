import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import styles from './Navbar.module.css';

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
                        <div className={styles.hoverUnderline} />
                    </Link>
                </li>
                <li className={router.pathname == "/about" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/about" 
                        className={router.pathname == "/about" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        About
                        <div className={styles.hoverUnderline} />
                    </Link>
                </li>
                <li className={router.pathname == "/projects" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/projects" 
                        className={router.pathname == "/projects" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        Projects
                        <div className={styles.hoverUnderline} />
                    </Link>
                </li>
                <li className={router.pathname == "/contact" ? `${liClassName} ${liActiveClass}` : `${liClassName}`}>
                    <Link href="/contact" 
                        className={router.pathname == "/contact" ? 
                                    `${LinkInactiveClass} ${LinkActiveClass}` : `${LinkInactiveClass}`}
                    >
                        Contact
                        <div className={styles.hoverUnderline} />
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className={`w-full h-20 ${styles.navbarPadding}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg">
                        David Jeong
                    </h1>
                    <p className="text-base md:text-sm text-gray-700 mt-1">
                        B.S. CompSci, StatSci at Duke University
                    </p>
                </div>
                <Menu 
                    ulClassName="gap-x-11 flex lg:hidden"
                    LinkInactiveClass={styles.navLink}
                    LinkActiveClass={styles.activeLink}
                />
                <button className={`${styles.smallScreenNavbar} hidden lg:block`} onClick={handleClick}>
                    <div className={`${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
                    <div className={`${styles.two} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`${isOpen ? '-rotate-45 -translate-y-[10px] w-[30px]' : 'w-[25px]'}`} />
                </button>
            </div>
            { isOpen ? 
                <div className="flex justify-end">
                    <Menu 
                        ulClassName={styles.dropdownMenu}
                        liClassName={styles.menuItem}
                        liActiveClass={styles.activeMenuItem} 
                    />
                </div>
            : null }
        </div>
    )
}