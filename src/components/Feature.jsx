import {features} from "../constants";

const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Features</span>
        <h1 className="text-3xl sm:text-sm lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{" "}your code</span></h1>
      </div>


      
      <div className="flex flex-wrap mt-10 mx-10 lg:mt-20">
  {features.map((feature, index) => (
    <div
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 mb-6"
    >
      <div className="flex items-start p-4">
        <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
          {feature.icon}
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-semibold mb-2">{feature.text}</h1>
          <p className="text-md text-neutral-500">{feature.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Feature

