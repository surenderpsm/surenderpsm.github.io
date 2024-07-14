import React from 'react';
import VerticalHeading from '../subcomponents/verticalHeading';

const SectionLayout = ({ title, children, keepTitleLeft, keepTitleTop}) => (
    <section
        className={`flex ${keepTitleTop?'flex-col': keepTitleLeft ? 'flex-row' : 'flex-row-reverse'} justify-between min-h-screen md:min-h-fit`}
    >
        <VerticalHeading text={title} horizontal={keepTitleTop} />
        {children}
    </section>
);

export default SectionLayout;
