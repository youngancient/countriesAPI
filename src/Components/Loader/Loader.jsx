import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

const loaderVariants ={
    initial : {
        opacity: 1,
    },
    exit :{
        opacity : 0,
        transition : {
            duration : 0.25,
        }
    }
}
const Loader = () => {
    return ( 
        <motion.div className="loader"
        variants={loaderVariants}
        exit = "exit"
        >
            <ClipLoader color={'hsl(231, 69%, 60%)'} size={50} />
        </motion.div>
     );
}
 
export default Loader;