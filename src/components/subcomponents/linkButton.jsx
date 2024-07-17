import React from 'react';
import { motion } from 'framer-motion';

const LinkButton = ({ text, icon, link }) => (
    <motion.a
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ translateY: -2 }}
        transition={{ type: 'spring', stiffness: 100 }}
        href={link}
        className="bg-white dark:bg-black rounded-xl m-1 hover:dark:bg-red-600 hover:bg-red-300"
    >
        <div className="flex flex-row flex-nowrap justify-center gap-2">
            <span>{text}</span>
            {icon}
        </div>
    </motion.a>
);

export default LinkButton;
