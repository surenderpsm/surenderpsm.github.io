import React from 'react';
import Education from './education';
import Project from './project';
import Certification from './certification';
import Skills from './skills';

const Portfolio = () => {
    return (
        <div className="flex flex-col justify-between">
            <Education />
            <Skills color={'bg-slate-200 dark:bg-slate-900'} />
            <Project color={'bg-red-200 dark:bg-red-700'} />
            <Certification color={'bg-green-200 dark:bg-green-700'} />
        </div>
    );
};

export default Portfolio;
