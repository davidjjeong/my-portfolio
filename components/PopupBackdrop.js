import { motion } from "framer-motion";

const PopupBackdrop = ({ children, onClick }) => {
    return(
        <motion.div
            onClick={onClick}
            className="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default PopupBackdrop;