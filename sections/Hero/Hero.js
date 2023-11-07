import React from "react";

import Image from "next/image";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { Highlight } from "../../components/Highlight";
import { ContactMe } from "../../components/Buttons";

import styles from './Hero.module.css';

export default function Hero() {
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
                                <h1 className={`${styles.hero} text-8xl md:text-7xl my-4`}>
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
            <div className={`${styles.heroImg} my-16 lg:mt-14`}>
                <Image src={"/profile_pic.png"} height={540} width={460} />
            </div>
        </div>
    );
}