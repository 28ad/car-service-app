import heroImg from './assets/images/hero-image.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen bg-white">

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
      
    </div>
  );
}
