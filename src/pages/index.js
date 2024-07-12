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
                (function() {
                // Change these if you use something different in your hook.
                var storageKey = 'user-prefers-dark';
                var classNameDark = 'dark';
                var classNameLight = 'light-mode';

                function setClassOnDocumentBody(darkMode) {
                    if (darkMode)
                        document.body.classList.add(classNameDark)
                    else
                        document.body.classList.remove(classNameDark);
                }
                
                var preferDarkQuery = '(prefers-color-scheme: dark)';
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;
                try {
                    localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}
                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                    localStorageTheme = (localStorageTheme === 'true') ? true : false;
                }

                // Determine the source of truth
                if (localStorageExists) {
                    // source of truth from localStorage
                    setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                    // source of truth from system
                    setClassOnDocumentBody(mql.matches);
                }
                })();
                `,
            }}
        /> */}

        <title>
            Surender Soundiramourty | Graduate Student | Aspiring Software
            Engineer
        </title>
    </>
);
