import * as React from "react"
import {useState, useEffect} from 'react'
import Portfolio from "../components/portfolio"
import { StaticImage } from "gatsby-plugin-image"

const DarkModeToggle = () => {

  const [rotateToggle, setRotateToggle] = useState(false)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const initialDarkState =  localStorage.getItem('darkModePreference')?(localStorage.getItem('darkModePreference')==='true'?true:false):prefersDark.matches;
  const [dark, setDark] = useState(initialDarkState)

  useEffect(()=>{
    if(dark){
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  }, [dark])

  prefersDark.addEventListener("change", (evt) => setDark(evt.matches));
  const handleClick = ()=>{
    setDark(!dark)
    localStorage.setItem('darkModePreference',dark)
    setRotateToggle(!rotateToggle)
  }
  return (
    <button onClick = {handleClick} id="toggle-dark-mode" className= "fixed bottom-5 right-5 sm:bottom-10 sm:right-10">
      <svg className= {`size-10 sm:size-20 hover:scale-95 active:scale-75 duration-500 ${rotateToggle?'rotate-180':''}`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>Switch between Dark, Light and System Preference</title>
          <g id="Layer_2" data-name="Layer 2">
              <g id="Icons">
              <g>
                  <rect width="48" height="48" fill="none"/>
                  <g>
                  <path fill="currentColor" d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                  <path fill="currentColor" d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
                  </g>
              </g>
              </g>
          </g>
      </svg>
    </button>
  )
}




const IndexPage = () => {
  return (
    <>
      
      <DarkModeToggle/>
      <header className="h-screen sm:h-fit flex flex-col justify-center">
          <div className="flex flex-col items-center m-10">
              <StaticImage src="../images/dp.jpg" className="animate-[fadeInBottom_1s_ease-in-out] size-[200px] rounded-full" alt="A headshot of Surender with foliage in the background"/>
              <div className="animate-[fadeInBottom_1.5s_ease-in-out] font-display font-extralight text-center text-4xl mt-10 mb-2">
                  Hi, I am <span className="font-extrabold text-5xl">Surender</span>
              </div>
              <div className="animate-[fadeInBottom_2s_ease-in-out] font-mono text-center">
                  Computer Science Graduate | Front-end Developer | Data Science Enthusiast
              </div>
          </div>
          <svg className="m-20 md:hidden animate-pulse" viewBox="-2.4 -2.4 28.80 28.80" fill="none" title="Scroll Down"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </header>

      <main>
        <Portfolio/>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Surender Soundiramourty | Graduate Student | Aspiring Software Engineer</title>
