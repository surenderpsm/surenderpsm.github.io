import React from 'react';
import Heading from '../subcomponents/heading';
import { motion } from 'framer-motion';

const SectionLayout = ({ title, children, color, subtitle }) => (
    <section className={`snap-start snap-always relative top-0`}>
        <Heading text={title} color={color} subtitle={subtitle} />
        {children}
    </section>
);

export default SectionLayout;
