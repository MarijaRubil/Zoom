import {  RxHamburgerMenu  } from 'react-icons/rx';
import { FaGraduationCap } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { RiGovernmentFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
import { AiOutlineDropbox } from 'react-icons/ai';
import { BsTagsFill } from 'react-icons/bs';


import Card from "./Card";

function App() {
  return (
 <div className='flex-col'>

  <div className='flex p-8 justify-between md:justify-start' >
    <header>
     <img className="logo flex flex-row" src="Zoom_logo.svg" alt="Zoom logo" />
    </header>
    
    
    <nav className='text-3xl'>

    <div className='block md:hidden'>
      <RxHamburgerMenu />
      </div>

      <div className='hidden md:block'>
        <ul className='font-open-sans space-x-4 ml-8 text-light-grey text-xl flex flex-row'>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Plans & Pricing</li>
        </ul>
      </div>
    </nav>
    </div>


   <div className='flex flex-col md:flex-row my-10'>
    <div className='h-1/2 md:w-1/2 text-left px-7 m-9'><h1 className='text-5xl md:text-7xl font-open-sans font-semibold leading-none pb-10'>One plattform to 
    <span className='text-zoom-blue'> connect</span></h1>
    <p className='text-2xl font-open-sans font-normal'>Bring teams together, reimagine workspaces, engage new audiences, 
    and delight your customers - all on the Zoom plattform you all know and love</p></div>
    <img className='mx-5 md:mx-0 h-3/5 md:w-2/5 rounded-xl object-scale-down' src="zoom-1.jpeg" alt='Meeting on Zoom' />
   </div>
   
   
      <div className='flex bg-blue-900 h-90'>
      <img className='invisible md:visible w-1 md:w-2/5 object-scale-down' src='zoom_wheel1.png' alt='Zoom Wheel' />
      <div className= 'ml-12 md:mr-8 w-3/5 font-open-sans flex flex-col text-white justify-center'><h2 className='text-4xl pb-5 font-semibold'>Make work less work</h2>
      <p className='font-semibold pb-5 text-sky-200'>Securely connect and collaborate so
     you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
     <p className='font-bold text-white hover:text-sky-400'>Discover the possibilites</p>
     </div>
   </div>

    
    <div className='flex md:flex-row my-20'>
          <div className='h-3/5 md:w-3/5 pl-4 md:pl-7 text-left leading-snug m-8 pr-20'>
          <h1 className='font-open-sans text-4xl font-semibold leading-tight pb-5'>Powering organizations across industries and geographies</h1>
          <p className='text-2xl font-open-sans font-normal text-slate-800'>Zoom helps consolidate communications, connect people,
            and collaborate better together in the boardroom, classroom, 
            operating room, and everywhere in between.</p>
            <p className='font-bold text-black hover:text-sky-400'>
        <button className="w-90  bg-green-300 border-green-300 rounded-lg shadow-sm flex items-center justify-center p-4">Explore Industry Solutions</button></p>
     </div>

     <div className="h-5/5 md:w-2/5 columns-2 space-y-5 px-10 py-5">
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <FaGraduationCap className="text-blue-800" />
          <span className="text-gray-900 font-medium">Education</span>
        </button>
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <GiMoneyStack className="text-blue-800" />
          <span className="ext-gray-900 font-medium">Financial</span>
        </button>
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <RiGovernmentFill className="text-blue-800" />
          <span className="text-gray-900 font-medium">Government</span>
        </button>
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <GiHealthNormal className="text-blue-800" />
          <span className="text-gray-900 font-medium">Health Care</span>
        </button>
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <AiOutlineDropbox className="text-blue-800" />
          <span className="text-gray-900 font-medium">Manufacturing</span>
        </button>
        <button className="w-full bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 p-7">
          <BsTagsFill className="text-blue-800" />
          <span className="text-gray-900 font-medium">Retail</span>
        </button>
      </div>


    </div>
  </div>
  );
}

export default App