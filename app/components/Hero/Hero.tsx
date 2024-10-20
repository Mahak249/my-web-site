


const Hero = () => {
    return (
      <section className="bg-slate-300 text-white h-screen flex items-center justify-center">
        <div className="text-center   px-4 font-serif ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            WELCOME TO MY WEB-SITE 
        </h1>
        
          <p className="text-lg md:text-xl mb-6">
this is an example of a hero section built with next.js and tailwind.css
          </p>
          <a
          href="#"
          className=" bg-slate-200 text-white py-3 px-6 rounded-full hover:bg-slate-400 transition
          duration-300">
          Get Started
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;