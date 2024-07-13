import React from 'react';
import VerticalHeading from '../subcomponents/verticalHeading';

const SectionLayout = ({ title, children, keepTitleLeft }) => (
    <section
        className={`flex ${keepTitleLeft ? 'flex-row' : 'flex-row-reverse'} min-h-screen md:min-h-fit`}
    >
        <VerticalHeading text={title} />
        {children}
    </section>
);

export default SectionLayout;
