import { Menu , X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";
import { navItems} from "../constants"

const Navbar = () => {

    const [mobiledraweropen , setmobiledraweropen] = useState(false);
    const togglenavbar = () => setmobiledraweropen(!mobiledraweropen);
  return (
  
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">

        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-centre">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo}  alt="logo" />
                    <span className="text-xl trackin-tight">virtualR</span>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12 justify-center items-center">
                    {navItems.map((item , index ) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#"  className="py-2 px-3 border text-neutral-400 rounded-md transform transition-transform duration-300 hover:scale-110 hover:text-white ">Sign in</a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-md transform transition-transform duration-300 hover:scale-110">Create Acount </a>
                </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={togglenavbar}>
                            {mobiledraweropen ? <X/> :<Menu/>}
                        </button>
                    </div>
            </div>
            {mobiledraweropen && (
                <div className="fixed right-0 z-20 bg-neutral-900  w-full p-12 flex flex-col justify-center items-center lg:hidden"> 
                    <ul>
                        {navItems.map((item , index ) =>(
                            <li key={index} className="py-4">
                                <a href={item.href}> {item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md ">
                            Sign in
                        </a>
                        <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                            Create Account
                        </a>
                    </div>
                    
                </div>
            )}
        </div>
    </nav>
  
  )
}

export default Navbar
