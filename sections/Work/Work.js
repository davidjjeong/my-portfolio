import Image from "next/image";
import Link from "next/link";

export default function Work () {
    const Work = ({img, header, subheader, description}) => {
        return (
            <li className="work-item">
                <Image className="work-pic" src={img} width={500} height={340} unoptimized />
                <h1 className="work-header">{header}</h1>
                <h2 className="work-subheader">{subheader}</h2>
                <p className="work-description">{description}</p>
            </li>
        );
    }

    return (
        <div>
            <h1 className="text-7xl text-center mt-16">
                Projects
            </h1>
            <p className="fw-500 text-xl text-center mt-12 px-[5%]">
                <span className="text-[#3F00FF] bold-text">Highlights</span> {" "}
                of mobile/web apps and research I've designed and developed.
            </p>
            <div className="flex justify-center">
                <ul className="work-list">
                    <Work 
                        img="/PedGUARD.png"
                        header="PedGUARD: Pedestrian's Guiding Utility"
                        subheader="Mobile Application"
                        description="Developed a depthwise separable convolution-based application to 
                        detect and alert the existence of hazards on the sidewalk to &quot;smombies&quot; 
                        and the visually impaired in real-time using low-performance mobile devices."
                    />
                    <Work
                        img="/VibeZ_Listen.png"
                        header="VibeZ: Find New Music that You Vibe With"
                        subheader="Web Application"
                        description="Interactive, user-friendly web app in NEXT.js tailored towards
                        Spotify users to define the vibes of new songs they would like to explore, which
                        returns such a list using REST API wrapper around Spotify Web API."
                    />
                    <Work
                        img="/FishAI.png"
                        header="FishAI: Promote Sustainable Fishing"
                        subheader="Web Application"
                        description="A web application based on YOLOv5 model built with PyTorch that
                        helps identify the species of the fish to check whether it is endangered or
                        not. Delivered an engaging user experience by developing interactive,
                        responsive UI design using MUI library and CSS3."
                    />
                    <Work
                        img="/ParticleCover.png"
                        header="Large Hadron Collider (LHC) Particle Generator"
                        subheader="Research Project"
                        description="A Python algorithm that takes data of an event in the LHC and
                        separates such data into a finite number of wedges, where each wedge represents 
                        a portion of the data of all spacepoints in an event. Conducted with the research 
                        group led by Dr. Ashutosh Kotwal at Duke University."
                    />
                </ul>
            </div>
        </div>
    );
}