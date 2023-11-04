import { motion } from "framer-motion";
import { BsRocket } from 'react-icons/bs';

import PopupBackdrop from "./PopupBackdrop";
import { Rotate90DegreesCcw } from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
};

const PopupSuccess = ({handleClose}) => {
    const stars = [1, 2, 3, 4, 5, 6, 7, 8];

    return(
        <PopupBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="popup-success"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="rocket">
                    <BsRocket
                        style={{
                            color: "#00DDB3",
                        }}
                        size={80}
                    />
                </div>
                {stars.map((i) => {
                    return(
                        <div 
                            id={i}
                            className="star"
                            style={{
                                height: Math.max(25, Math.random() * 50) + "px",
                                left: 27.5 + (i * 5) + "%",
                                animationDelay: Math.random() * 1 + "s",
                                animationDuration: 0.5 + Math.random() * 1 + "s",
                            }}
                        />
                    );
                })}
                <h1 className="mt-10 text-4xl text-center text-[#00DDB3]">Thank You!</h1>
                <p className="mt-3 xs:text-sm text-center description px-4">
                    Thank you for reaching out! I will be in touch with you shortly.
                </p>
                <button onClick={handleClose} className="popup-button mt-5">Ok, Close</button>
            </motion.div>
        </PopupBackdrop>
    );
}

export default PopupSuccess;