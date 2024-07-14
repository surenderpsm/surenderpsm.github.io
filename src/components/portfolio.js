import React from 'react';
import Education from './education';
import Project from './project';
import Certification from './certification';
import Skills from './skills';

const Portfolio = () => {
    return (
        <div className="flex flex-col justify-between">
            <Education />
            <Project />
            <Certification />
            <Skills />
        </div>
    );
};

export default Portfolio;
