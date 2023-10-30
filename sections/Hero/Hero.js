import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "../../components/Highlight";
import { ContactMe } from "../../components/Buttons";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const colors = ['#FF5F1F', '#FFF700', '#3DED97', '#3F00FF'];
    const new_colors = ['#FFCC0F', '#3F00FF', '#FFAC1C', '#1F51FF'];

    return (
        <div className="flex flex-row lg:flex-col justify-evenly lg:justify-center items-start lg:items-center">
            <div className="mt-24 lg:mt-12 text-left lg:text-center">
                <div className="lg:flex sm:flex-col">
                    <h1 className="text-8xl md:text-7xl mt-4 mb-6">
                        Hi, I am
                    </h1>
                    <div className="w-80 md:w-56 sm:mx-auto">
                        <RoughNotationGroup show={true}>
                            <Highlight color={'#3F00FF'}>
                                <h1 className="hero text-8xl md:text-7xl my-4">
                                    David
                                </h1>
                            </Highlight>
                        </RoughNotationGroup>
                    </div>
                </div>
                <h1 className="description pt-6 md:pt-4 text-xl md:text-lg space-y-2">
                    <div>An avid coder passionate in web development,</div>
                    <div>software engineering, and ML research.</div>
                    <div>I like to innovate, develop, and code for good :{")"}</div>
                </h1>
                <div className="mt-8">
                    <Link href="/contact"><ContactMe /></Link>
                </div>
            </div>
            <div className="hero-img mt-16 lg:mt-14 lg:mb-12">
                <Image src={"/profile_pic.png"} height={540} width={460} />
            </div>
        </div>
    );
}