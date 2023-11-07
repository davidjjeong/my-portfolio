import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footerBackdrop}>
            <div className={styles.footerTemplate}>
                <hr className={styles.footerLine} />
                <div className={styles.copyrightText}>
                    © {currentYear} David Jeong. All Rights Reserved.
                </div>
                <ul className={`${styles.iconsList} gap-x-3`}>
                    <li className={styles.icon}>
                        <Link 
                            href="https://www.linkedin.com/in/davidj0820"
                            target="_blank"
                        >
                            <AiOutlineLinkedin size={35} color="#FFF" />
                        </Link>
                    </li>
                    <li className={styles.icon}>
                        <Link
                            href="https://github.com/davidjjeong"
                            target="_blank"
                        >
                            <AiOutlineGithub size={35} color="#FFF" />
                        </Link>
                    </li>
                    <li className={styles.icon}>
                        <Link
                            href="https://www.instagram.com/david.jeong__/"
                            target="_blank"
                        >
                            <AiOutlineInstagram size={35} color="#FFF" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}