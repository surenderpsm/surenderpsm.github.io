import React from 'react';
import VerticalHeading from '../subcomponents/verticalHeading';

const SectionLayout = ({ title, children, keepTitleLeft }) => (
    <section
        className={`flex ${keepTitleLeft ? 'flex-row' : 'flex-row-reverse'} h-screen md:h-fit`}
    >
        <VerticalHeading text={title} />
        <div className="flex flex-col justify-start basis-full">{children}</div>
    </section>
);

export default SectionLayout;
