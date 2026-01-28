import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import EventsNews from './components/EventsNews';
import Benefits from './components/Benefits';
import Directory from './components/Directory';
import AlumniMap from './components/AlumniMap';
import Testimonials from './components/Testimonials';
import Documents from './components/Documents';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // A simple placeholder for the dashboard
  const Dashboard = () => (
    <div className="container mx-auto px-6 py-20 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to your Dashboard!</h1>
      <p className="text-lg text-gray-600 mb-8">Profile management and other features are coming soon.</p>
    </div>
  );

  return (
    <div className="bg-white font-sans">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <>
            <Hero />
            <Spotlight />
            <EventsNews />
            <Benefits />
            <Directory />
            <AlumniMap />
            <Testimonials />
            <Documents />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
