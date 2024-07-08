import * as React from "react"
import {useState} from 'react'
import dp from '../images/dp.jpg'

const DarkModeToggle = () => {
  const [rotateToggle, setRotateToggle] = useState(false)
  const handleClick = ()=>{
    document.body.classList.toggle('dark')
    setRotateToggle(!rotateToggle)
  }
  return (
    <button onClick = {handleClick} id="toggle-dark-mode" className= "fixed bottom-5 right-5 sm:bottom-10 sm:right-10">
      <svg className= {`size-10 sm:size-20 hover:scale-95 active:scale-75 duration-500 ${rotateToggle?'rotate-180':''}`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>dark-mode</title>
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
      <header>
      </header>

      <main>
          <div className="flex flex-col items-center m-10">
              <img className="animate-[fadeInBottom_3s_ease-in-out] size-[200px] rounded-full" src={dp} alt="A headshot of Surender with foliage in the background"/>
              <div className="animate-[fadeInBottom_3.5s_ease-in-out] font-display font-extralight text-center text-4xl mt-10 mb-2">
                  Hi, I am <span className="font-extrabold text-5xl">Surender</span>
              </div>
              <div className="animate-[fadeInBottom_4s_ease-in-out] font-mono text-center">
                  Computer Science Graduate | Front-end Developer | Data Science Enthusiast
              </div>
          </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Surender Soundiramourty | Graduate Student | Aspiring Software Engineer</title>
