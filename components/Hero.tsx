import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/campus/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          UICT Alumni Network
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light mb-8 drop-shadow-md">
          Connecting UICT Alumni for Growth, Opportunities & Community.
        </p>
        <a href="#directory" className="inline-block bg-secondary text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
          Join the Network
        </a>
      </div>
    </section>
  );
};

export default Hero;
