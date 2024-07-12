import * as React from 'react';
import Portfolio from '../components/portfolio';
import DarkModeToggle from '../components/subcomponents/darkModeToggle';
import Hero from '../components/subcomponents/hero';

const IndexPage = () => {
    const rootDOM = React.createRef();
    return (
        <div id="root" className="main-wrapper" ref={rootDOM}>
            <DarkModeToggle getRoot={() => rootDOM} />
            <Hero />

            <main>
                <Portfolio />
            </main>
        </div>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        {/* <script
            dangerouslySetInnerHTML={{
                __html: `

                const mode = localStorage.getItem("dm-manual-toggle")
                var ls
                if (mode)
                    ls = window.matchMedia('(prefers-color-scheme: dark)').matches
                else{
                    ls = localStorage.getItem("user-prefers-dark")
                    ls = ls === 'true' ? true : false;
                }
                if (ls) document.html.classList.add('dark')
                else document.html.classList.remove('dark')
                console.log('INLINE script changed theme: dark mode is' + ls);
                `,
            }}
        /> */}

        <title>
            Surender Soundiramourty | Graduate Student | Aspiring Software
            Engineer
        </title>
    </>
);
