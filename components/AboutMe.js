import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="img-frame mt-20">
                <Image src={"/about_profile.jpg"} width={350} height={700} />
            </div>
            <div className="flex flex-col w-1/3 ml-24 description">
                <h1 className="text-5xl mt-16">
                    About Me
                </h1>
                <hr className="mt-8"/>
                <div className="space-y-5 mt-8">
                    <div>
                        Hi, I'm <span class="important-word">David Jeong,</span> {" "} an
                        undergraduate student at Duke University double-majoring in {" "}
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
                        <span class="bold-text">image recongition.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}