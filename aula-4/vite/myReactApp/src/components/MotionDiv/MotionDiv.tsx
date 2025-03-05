import { motion, spring, transform } from "framer-motion";

export default function BasicAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 , scale: 0.1}}
            animate={{ opacity: 1, x: 0 , scale: 0.2}}
            transition={{ type: "spring", stiffness: 9000000000, damping: -1, duration: 0.1 }} //9000000000, damping: -1
            style={{
                width: "500px",
                height: "500px",
                borderRadius: "1px",
                background: "linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
            }}
        >
            
███████▀▀▀░░░░░░░▀▀▀███████
██████▀░░░░░░░░░░░░░░░▀████
█████│░░░░░░░░░░░░░░░░│████
████└┐░░░░░░░░░░░░░░░┌┘░███
███░░└┐░░░░░░░░░░░░░░┌┘░░██
███░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
██▌░▄██████▄░░░▄██████▄░▐██
███─┘░░▓▓▓▓░░░░░▓▓▓▓░░└─███
██▀▓▓▓░▓▓▓▓░░░░░▓▓▓▓░▓▓░▀██
██▄▓▓▓░▓▓▓▓▄▄▄▄▄▓▓▓▓░▓▓▄███
████▄─┘█████████████└─▄████
█████░░▐███████████▌░░█████
██████░░▀█████████▀░░▐█████
███████░░░░▓▓▓▓▓░░░░▄██████
████████▄░░░░░░░░░▄████████
███████████▓▓▓▓▓███████████
███████████▓▓▓▓▓███████████

        </motion.div>
    );
}
