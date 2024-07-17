import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({ text, color }) => {
    return (
        <div
            className={`${color} flex flex-col sm:flex-row justify-evenly h-[100svh] sticky top-0`}
        >
            {text.split('').map((char, index) => (
                <motion.div
                    initial={{ scale:1.3}}
                    whileInView={{scale:1}}
                    transition={{ type: 'spring', stiffness:100}}
                    viewport={{omce: true}}
                    key={index}
                    className="self-center text-[2em] xs:text-[4em] sm:text-[5em] xl:text-[10em] 2xl:text-[12em] font-['Rubik_Mono_One'] -z-10"
                >
                    {char}
                </motion.div>
            ))}
        </div>
    );
};

export default Heading;
