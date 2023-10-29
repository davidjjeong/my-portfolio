import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimText({text}) {
    const count = useMotionValue(0);
    const roundedCount = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(roundedCount, (latest) =>
        text.slice(0, latest)
    );

    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, text.length, {
                type: "tween",
                duration: 4,
                ease: "easeInOut",
            });
            return controls.stop;
        }
    }, [inView]);

    return (
        <span ref={ref}>
            <motion.span>{displayText}</motion.span>
        </span>
    );
}