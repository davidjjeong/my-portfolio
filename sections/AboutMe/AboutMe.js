import { useRef } from "react";
import Image from "next/image";

import { BiLogoJavascript, BiLogoPython, BiLogoHtml5, BiLogoReact, BiLogoMongodb,
         BiLogoCss3, BiLogoJava, BiLogoCPlusPlus, BiLogoTailwindCss, BiLogoGit } from 'react-icons/bi';

import AnimText from "../../components/AnimText";
import AnimParticle from "@/components/AnimParticle";
import Experience from "./Experience/Experience";
import { connectParticles, drawParticles, generateParticles, updateParticles } from "@/utils/particleUtils";

import styles from './AboutMe.module.css';

export default function AboutMe() {
    const skills = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className={styles.aboutTemplate}>
                <div className={`${styles.aboutImg} ${styles.blob}`}>
                    <Image src={"/about_pic.jpg"} width={460} height={425.07} />
                </div>
                <div className={styles.aboutDescription}>
                    <div className={styles.aboutHeaders}>
                        <h1 className="text-5xl sm:text-4xl mt-16">
                            About Me
                        </h1>
                        <hr className="mt-8"/>
                    </div>
                    <div className="space-y-5 mt-8">
                        <div>
                            Hi, I'm <span class="important-word">David Jeong,</span> {" "}
                            a Duke undergraduate student double-majoring in {" "}
                            <span class="bold-text">computer</span> and {" "}
                            <span class="bold-text">statistical science.</span> 
                        </div>
                        <div>  
                            I like to code for fun, solve challenging
                            {" "} problems that make me think beyond, and develop innovations that can
                            {" "} greatly contribute to society by tackling the most daunting problems
                            {" "} in the world.
                        </div>
                        <div>
                            I have been fascinated by how cutting-edge technologies in web development{" "}
                            can provide meaningful and user-friendly interfaces to improve user experience.{" "}
                            Currently, I am dedicated to learning and honing my skills in web development{" "}
                            technologies such as <span class="bold-text">HTML, CSS, NEXT.js,</span> and {" "}
                            <span class="bold-text">React</span> as a student web developer.
                        </div>
                        <div>
                            Yet my passion is not just limited to such: I have great interest in{" "}
                            <span class="bold-text">software engineering</span> and{" "}
                            <span class="bold-text">ML,</span> especially in the area of{" "}
                            <span class="bold-text">image recognition.</span>
                        </div>
                    </div>
                </div>
            </div>
            <a id={styles.scrollDownBtn} onClick={() => scrollToSection(skills)} />
            <AnimParticle 
                generateParticle={generateParticles} 
                drawParticle={drawParticles} 
                updateParticle={updateParticles}
                connectTrue={true}
                connectParticle={connectParticles}
            />
            <div ref={skills} className={styles.skillsTemplate}>
                <h1 className="text-7xl md:text-6xl text-center">
                    Skills
                </h1>
                <h2 className="fw-500 text-xl md:text-lg text-center mt-10">
                    <span className="text-[#3F00FF]">{"<h2>"}</span> 
                    <AnimText text="Main tech stack I've recently been delving into." 
                        color="text-[#000]" 
                    />
                    <span className="text-[#3F00FF]">{"</h2>"}</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mt-10">
                    <BiLogoJavascript size={110} className={styles.devIcon} />
                    <BiLogoPython size={110} className={styles.devIcon} />
                    <BiLogoHtml5 size={110} className={styles.devIcon} />
                    <BiLogoCss3 size={110} className={styles.devIcon} />
                    <BiLogoTailwindCss size={110} className={styles.devIcon} />
                    <BiLogoReact size={110} className={styles.devIcon} />
                    <BiLogoJava size={110} className={styles.devIcon} />
                    <BiLogoCPlusPlus size={110} className={styles.devIcon} />
                    <BiLogoMongodb size={110} className={styles.devIcon} />
                    <BiLogoGit size={110} className={styles.devIcon} />
                </div>
            </div>
            <Experience />
        </div>
    );
}