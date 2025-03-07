import { useState } from 'react'
import './App.css'
import kinich from './assets/kinich.jpg'
import konata from './assets/konata.png'
import me1 from './assets/gallery-images/me1.jpg'
import books1 from './assets/gallery-images/books1.jpg'
import edc1 from './assets/gallery-images/edc1.jpg'
import food2 from './assets/gallery-images/food2.jpg'
import food3 from './assets/gallery-images/food3.jpg'
import food4 from './assets/gallery-images/food4.jpg'
import food5 from './assets/gallery-images/food5.jpg'
import food6 from './assets/gallery-images/food6.jpg'
import me2 from './assets/gallery-images/me2.jpg'
import me3 from './assets/gallery-images/me3.jpg'
import nature1 from './assets/gallery-images/nature1.jpg'
import nature2 from './assets/gallery-images/nature2.jpg'
import nature3 from './assets/gallery-images/nature3.jpg'
import nature4 from './assets/gallery-images/nature4.jpg'
import nature5 from './assets/gallery-images/nature5.jpg'
import nature6 from './assets/gallery-images/nature6.jpg'
import cat from './assets/gallery-images/cat_bell.mov'
import cake from './assets/gallery-images/cake.mov'
import kotlin from './assets/gallery-images/kotlin_app.mov'
import nature_video from './assets/gallery-images/upside_down_nature.mov'

function App() {

  return (
    <>
      <div className="container text-[#e0e1dd]">
        <aside className="w-[100%] h-[100vh] bg-[#415A77] text-platinum p-4 bg-ox rounded-r-4xl">
          <img src={konata} alt="logo" className="logo mb-[2rem] rounded-4xl"></img>
          <p className="aside-description text-justify text-xl">Welcome to my 2024 personal highlights! I update this at the beginning of the new year to showcase how life looked for me! While this is a rather simple gallery, more interactivity will come as I continue to develop the website! If anything is broken or you just want to reach out to me, feel free to visit my socials down below or join the Discord!</p>
          <div id="links" className="text-xl">
            <a className="hover:cursor-pointer" href="https://discord.gg/ta3qXMbkeV" target="_blank"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Discord</p></a>
            <a target="_blank" href="https://www.github.com/sylkylacole"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Github</p></a>
            <a target="_blank" href="mailto:sylkylacole@gmail.com"><p className="text-[#e0e1dd] hover:text-[#0D1B2A]">Email</p></a>
          </div>
        </aside>
        <div className="img-container bg-[#1B263B]">
          <div className="row m-[2rem]" id="row1">
            <img src={me1} alt="Picture of me" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl coolborder"></img>
            <video src={cat} alt="A cat who believes it is a bell" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl coolborder" controls="controls"></video>
            <img src={food2} alt="Korean ground beef on rice" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={nature1} alt="Pretty foliage" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={books1} alt="Book section at Walmart" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row2">
            <img src={nature2} alt="Pretty white flowers" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={nature3} alt="Cute duckie" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={me2} alt="Picture of me with my skinny glasses" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <video src={cake} alt="Birthday cake" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl" controls="controls"></video>
            <img src={food3} alt="Rinabow sprinkle cupcakes" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row3">
            <img src={food4} alt="Red velved cupcakes" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={nature4} alt="Solar eclipse beginning" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={edc1} alt="Tech EDC" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <video src={kotlin} alt="My first simple mobile app" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl" controls="controls"></video>
            <img src={nature5} alt="80 solar eclipsse" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="row m-[2rem]" id="row4">
            <img src={food6} alt="Cheesy pasta in a pot" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={me3} alt="Picture of me holding a stuffed elephant" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <video src={nature_video} alt="View at the nature center" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl" controls="controls"></video>
            <img src={nature6} alt="80 solar eclipse #2" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
            <img src={food5} alt="First perfect chocolate chip cookie" className="gallery-photo h-[25vh] w-[20vw] rounded-3xl"></img>
          </div>
          <div className="img-description">
            <p>Some text</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
