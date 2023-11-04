import { motion } from "framer-motion";
import { BsRocket } from 'react-icons/bs';

import PopupBackdrop from "./PopupBackdrop";
import { Rotate90DegreesCcw } from "@mui/icons-material";

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
                <BsRocket
                    style={{
                        color: "#00DDB3",
                    }}
                    size={80}
                />
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