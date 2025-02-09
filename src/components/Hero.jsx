import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Hero = () => {
  return (
  <div className="flex flex-col items-center mt-2 lg:mt-15">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">VirtualR build tools for 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> {" "} Developers</span>
    </h1>

    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity with VirtualR and bring your ideas to reality with our intiative development tools.
        Get started today and turn your imagination into a immersive life !.
    </p>
      

     <div className="flex justify-center my-10">
    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md transform transition-transform duration-300 hover:scale-110">Start for free</a>
    <a href="#" className="py-3 px-4 rounded-md border transform transition-transform duration-300 hover:scale-110">Documentation</a>
     </div>

     <div className="flex justify-center mt-7">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
             <source src={video1} type="video/mp4"/>
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
             <source src={video2} type="video/mp4"/>
        </video>
     </div>

     </div>
  );
};

export default Hero
