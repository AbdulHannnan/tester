import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    
      <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6"><Hero /></div>

      <div className="w-full mx-auto pt-20 px-6"><Feature/></div>

      <div className="w-full mx-auto pt-20 px-6"><Workflow/></div>

      <div className="max-w-7xl mx-auto pt-20 px-6"><Price/></div>

      <div className="w-full mx-auto pt-20 px-6"><Testimonial/></div>
      <div className="w-full  mx-auto pt-20 px-6"><Footer/></div>
      
       
      
      
      
      </>
    
  );
};

export default App

 