import { useState } from 'react'
import './App.css'
import kinich from './assets/kinich.jpg'

function App() {

  return (
    <>
      <div className="container text-[#e0e1dd]">
        <aside className="w-[100%] h-[100vh] bg-[#415A77] text-platinum p-4 bg-ox rounded-r-4xl">
          <img src={kinich} alt="logo" className="logo mb-[2rem] rounded-4xl"></img>
          <p className="aside-description text-justify text-xl">Welcome to my personal highlights! To learn more about the picture, click the photo! To get a brief note about the photo, hover over it for a bit. If anything is broken or you want to reach me, feel free to visit my socials down below or join the Discord!</p>
          <div id="links" className="text-xl">
            <a className="hover:cursor-pointer"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Discord</p></a>
            <a target="_blank" href="https://www.github.com/sylkylacole"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Github</p></a>
            <a target="_blank" href="mailto:sylkylacole@gmail.com"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Email</p></a>
          </div>
        </aside>
        <div className="img-container bg-[#1B263B]">
          <div className="row m-[2rem]" id="row1">
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl coolborder"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row2">
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row3">
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row4">
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={kinich} alt="placeholder-image" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
