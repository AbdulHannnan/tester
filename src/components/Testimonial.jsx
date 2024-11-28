import { Option } from "lucide-react";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying about <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> {" "}VirtualR</span></h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((Testimonial , index) => (
              <div key={index} className="w-full lg:w-1/2 sm:2-13 px-4 py-2 ">
                <div className="bg-neutral-800 rounded-md px-6 text-md border border-neutral-600 font-thin">
                    <p>{Testimonial.text}</p>

                    <div className="flex items-start mt-8">
                        <img className="h-12 w-12 mr-6 border rounded-full border-neutral-300 mb-2" src={Testimonial.image} alt={Testimonial.user} />

                        <div><h6>{Testimonial.user}</h6>
                            
                        <span className="text-sm font-normal italic text-orange-600">{Testimonial.company}</span>
                        </div>
                        
                    </div>
                </div>
              </div>  

            ))}
        </div>
      
    </div>
  )
}

export default Testimonial
