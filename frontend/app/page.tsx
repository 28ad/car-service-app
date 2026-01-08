import heroImg from './assets/images/hero-image.png';
import Image from 'next/image';
import { FaInfoCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full bg-white">

      {/* hero section */}
      <main className="p-8 lg:h-3/4 w-full bg-base-black flex justify-center items-center shadow-md">
        
        {/* hero container */}
        <div className=" p-6 lg:h-full w-full border-2 border-white rounded-xl flex md:justify-evenly">

          {/* hero main text + call to action */}

          <div className="flex flex-col items-start justify-center md:w-1/2">
            <div className="text-white text-3xl lg:text-6xl font-extrabold">TRACK ALL YOUR VEHICLE'S MAINTENANCE IN ONE PLACE</div>
            <div className="text-white text-md mt-2">Join now and keep track of your car's service history and much more in a few clicks</div>
            <button className="text-white font-bold mt-2 p-2 border-[0.5px] border-white rounded-lg cursor-pointer hover:bg-primary-accent hover:border-none duration-200 ease-in-out">GET STARTED</button>
          </div>

          <div className="hidden md:flex">
            <Image 
            src={heroImg} 
            alt='Hero image of a car'
            className='object-contain'/>
          </div>


        </div>
        
      </main>

      {/* services sections */}

        <div className="font-extrabold text-3xl p-10 text-center lg:text-left">
          <span className='border-b-6 border-primary-accent'>SERVICES</span>
        </div>
        

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center py-10'>

        {/* service cards */}
        <div className='shadow-md rounded-lg h-64 w-8/10 flex flex-col items-center justify-center text-center gap-2 p-10 hover:scale-105 '>
          <FaInfoCircle size={48}/>
          <span className='font-bold text-2xl'>TITLE</span>
          <span>Example text explaining the service mentioned in the card</span>

        </div>
                <div className='shadow-md rounded-lg h-64 w-8/10 flex flex-col items-center justify-center text-center gap-2 p-10 hover:scale-105'>
          <FaInfoCircle size={48}/>
          <span className='font-bold text-2xl'>TITLE</span>
          <span>Example text explaining the service mentioned in the card</span>

        </div>
                <div className='shadow-md rounded-lg h-64 w-8/10 flex flex-col items-center justify-center text-center gap-2 p-10 hover:scale-105'>
          <FaInfoCircle size={48}/>
          <span className='font-bold text-2xl'>TITLE</span>
          <span>Example text explaining the service mentioned in the card</span>

        </div>                   

      </div>
      
    </div>
  );
}
