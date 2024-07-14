import React from 'react';

const VerticalHeading = ({ text, horizontal }) => {
    return (
        <div className={`flex ${horizontal?'flex-row justify-center':'flex-col sticky top-0'}  h-fit md:basis-1/12`}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="text-5xl text-center font-['Major_Mono_Display']"
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default VerticalHeading;
