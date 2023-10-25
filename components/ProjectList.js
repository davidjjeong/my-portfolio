import { useRef } from "react";
import { motion, useScroll } from 'framer-motion';
import { Explore } from "./Buttons";
import Image from "next/image";
import Link from "next/link";

const Project = ({img, header, subheader, description, link}) => {
    return (
        <li className="portfolio-item box-shadow-3D border-black border-[1px] flex flex-row">
            <Image className="portfolio-pic" src={img} width={500} height={340} unoptimized/>
            <div className="mr-[24px] my-auto">
                <h1 className="portfolio-header">{header}</h1>
                <h2 className="text-lg mt-3">
                    <span className="subheader-app-type">{subheader}</span>
                </h2>
                <p className="mt-3 description">
                    {description}
                </p>
                <Link href={link} target="_blank">
                    <div className="mt-4">
                        <Explore />
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default function ProjectList () {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div>
            <h1 className="text-4xl md:text-6xl text-center mt-24">
                Projects
            </h1>
            <hr className="m-auto w-20 mt-6" />
            <div className="flex justify-center">
                <svg id="scroll-progress" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-grey" />
                    <motion.circle cx="50" cy="50" r="30" pathLength="1" 
                        className="progress-indicator" style={{ pathLength: scrollXProgress }} />
                </svg>
                <ul className="portfolio" ref={ref}>
                    <Project 
                        img="/PedGUARD.png"
                        header="PedGUARD: Pedestrian's Guiding Utility"
                        subheader="Mobile Application"
                        description="Developed a depthwise separable convolution-based application to 
                        detect and alert the existence of hazards on the sidewalk to &quot;smombies&quot; 
                        and the visually impaired in real-time using low-performance mobile devices."
                        link="https://projectboard.world/isef2021/project/robo063---machine-learning-based-danger-alerting-mobile-app"
                    />
                    <Project
                        img="/VibeZ_Listen.png"
                        header="VibeZ: Find New Music that You Vibe With"
                        subheader="Web Application"
                        description="Interactive, user-friendly web app in NEXT.js tailored towards
                        Spotify users to define the vibes of new songs they would like to explore, which
                        returns such a list using REST API wrapper around Spotify Web API."
                        link="https://vibe-z.vercel.app/"
                    />
                    <Project
                        img="/FishAI.png"
                        header="FishAI: Promote Sustainable Fishing"
                        subheader="Web Application"
                        description="A web application based on YOLOv5 model built with PyTorch that
                        helps identify the species of the fish to check whether it is endangered or
                        not. Delivered an engaging user experience by developing interactive,
                        responsive UI design using MUI library and CSS3."
                        link="https://devpost.com/software/fish-ai"
                    />
                    <Project
                        img="/ParticleCover.png"
                        header="Large Hadron Collider (LHC) Particle Generator"
                        subheader="Research Project"
                        description="A Python algorithm that takes data of an event in the LHC and
                        separates such data into a finite number of wedges, where each wedge represents 
                        a portion of the data of all spacepoints in an event. Conducted with the research 
                        group led by Dr. Ashutosh Kotwal at Duke University."
                        link="https://github.com/davidjjeong/ParticleGenerator"
                    />
                </ul>
            </div>
        </div>
    );
}