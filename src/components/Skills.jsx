import html from '../assets/html.png'
import css from '../assets/css.png'
import Javascript from '../assets/Javascript.png'
import TailwindCSS from '../assets/tailwindcss.png'
import MaterialUI from '../assets/materialUI.png'
import React from '../assets/react.png'

import SQL from '../assets/sql7.png'
import Firebase from '../assets/firebase.png'
import java from  '../assets/java.png'

const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 
    place-items-center md:flex md:justify-between md:items-center'>
      
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
       My <br/> Tech <br/> Stack
       </h2>
   
       <div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={html} alt=""/>
    <p className="mt-2">HTML</p>

</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={css} alt="" width={100} height={100}/>
    <p className="mt-2">CSS</p>

</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={Javascript} alt="" width={100} height={100}/>
    <p className="mt-2">JavaScript</p>

</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={TailwindCSS} alt="" width={100} height={100}/>
    <p className="mt-2">TailwindCSS</p>
</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={MaterialUI} alt="" width={100} height={100}/>
    <p className="mt-2">MaterialUI</p>
</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={React} alt="" width={100} height={100}/>
    <p className="mt-2">React</p>
</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={SQL} alt="" width={100} height={100}/>
    <p className="mt-2">SQL</p>
</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={Firebase} alt="" width={100} height={100}/>
    <p className="mt-2">FireBase</p>
</div>

<div className="flex flex-col items-center m-4 sm:my:0 w-[80px] md:w-[100px]">
    <img src={java} alt="" width={100} height={100}/>
    <p className="mt-2">Java</p>
</div>
    </div>
  )
}

export default Skills
