import { useRef, useState, useLayoutEffect } from 'react';

import { motion, useScroll } from 'framer-motion';

import styles from './Experience.module.css';

export default function Experience () {
    const [ulHeight, setUlHeight] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start center", "end center"],
        }
    );

    const ExpItem = ({position, affiliation, affiliationLink, time, address, description}) => {
        return (
            <li className={styles.liExpItem}>
                <div className={`flex flex-col bold-text text-3xl md:text-xl ${styles.expItemHeaders}`}>
                    <h2 className="text-[#000]">
                        {position}
                    </h2>
                    <a href={affiliationLink} target="_blank" className="text-[#3F00FF]">
                        @{affiliation}
                    </a>
                </div>
                <span className="mt-3 text-[#808080] fw-500 text-lg md:text-base">{time} | {address}</span>
                <p className="description mt-3 md:text-sm">{description}</p>
            </li>
        );
    }

    useLayoutEffect(() => {
        function onResize () {
            if(ref.current){
                setUlHeight(ref.current.clientHeight + innerHeight * 0.28);
                console.log('ulHeight: ', ref.current.clientHeight);
            }
        }

        window.addEventListener("resize", onResize);
        onResize();

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return (
        <div className={styles.experienceTemplate}>
            <h1 className="text-7xl md:text-6xl text-center">
                Experience
            </h1>
            <motion.div
                style={{ scaleY: scrollYProgress,
                         height: ulHeight + "px" }}
                className={`absolute bg-[#3F00FF] w-[6px] left-0 right-0 mx-auto rounded-[30px]
                            mt-16 origin-top`}
            />
            <div className="absolute bg-[#E6E6E6] w-[6px] h-[79vw] left-0 right-0 mx-auto rounded-[30px]
                            mt-16 z-[-10]" />
            <ul ref={ref} className={styles.expItemList}>
                <ExpItem
                    position="Private"
                    affiliation="KATUSA"
                    affiliationLink="https://8tharmy.korea.army.mil/site/about/katusa-soldier-program.asp"
                    time="Nov 2023 - Present"
                    address="South Korea"
                    description="Expected to initiate military service in the Republic of Korea as part of
                    the Korean Augmentation To the U.S. Army (KATUSA) starting as a private. Coming back
                    on Fall 2025 to start my junior year as an undergraduate at Duke University."
                />
                <ExpItem
                    position="Student Researcher"
                    affiliation="Duke HEP Group"
                    time="May - July 2023"
                    address="Durham, NC"
                    affiliationLink="https://physics.duke.edu/research/high-energy-physics"
                    description="Worked as an undergraduate student researcher in the Duke HEP Group led 
                    by Dr. Ashutosh Kotwal. Conducted research on a Python algorithm to divide the
                    collection of layers of spacepoints created by the decaying charged particles in the
                    Large Hadron Collider into an arbitrary number of &quot;patches&quot;."
                />
                <ExpItem 
                    position="Student Counselor"
                    affiliation="Kesem"
                    time="Feb 2023"
                    address="Sophia, NC"
                    affiliationLink="https://www.kesem.org/"
                    description="Accepted as a student counselor for Camp Kesem Duke, which took place
                    at Keyauwee Program Center from August 13 ~ 18, 2023. Received a training program
                    and qualification to work with children whose parents have been affected by cancer."
                />
                <ExpItem
                    position="Student Teaching Assistant"
                    affiliation="VERUS Academy"
                    time="Jun - Aug 2021"
                    address="Incheon, South Korea"
                    affiliationLink="http://www.verusacademy.co.kr/default/"
                    description="Mentored over 25 students enrolled in the International Baccalaureate
                    (IB) Diploma Programme (DP). Provided detailed, constructive feedback tailored to
                    each student's level of understanding in IB Physics, Math Analysis and Approaches /
                    Application & Interpretation, Economics, Chemistry, and English. Hosted daily office
                    hours for each student in need of guidance with regards to assignments."
                />
            </ul>
        </div>
    );
}