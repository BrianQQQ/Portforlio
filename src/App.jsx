import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-BYQVN0R9PK'); // Replace 'YOUR_TRACKING_ID' with your actual GA tracking ID
    // Record a pageview for the initial page load
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
