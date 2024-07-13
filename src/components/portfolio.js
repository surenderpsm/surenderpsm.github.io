import React from 'react';
import Education from './education';
import Project from './project';
import Certification from './certification';

const Portfolio = () => {
    return (
        <div className="flex flex-col justify-between">
            <Education />
            <Project />
            <Certification />
        </div>
    );
};

export default Portfolio;
