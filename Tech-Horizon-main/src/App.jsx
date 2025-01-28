import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Preloader from './components/Preloader';
import './index.css';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Heroo = lazy(() => import('./components/Heroo'));
const Navbar = lazy(() => import('./components/Navbar'));
const Works = lazy(() => import('./components/Works'));
const Footer = lazy(() => import('./components/Footer'));
const Guidelines = lazy(() => import('./components/Guidelines'));
const Support = lazy(() => import('./components/Support'));
const StarsCanvas = lazy(() => import('./components/StarBackground'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const CommitteeShowcase = lazy(() => import('./components/CommitteeShowcase'));
const Benefits = lazy(() => import('./components/Domains'));
const CountdownTimer = lazy(() => import('./components/CountdownTimer'));
const PrizeMoneySection = lazy(() => import('./components/PrizeMoneySection'));
const Sponsors = lazy(() => import('./components/Tech2'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <div className='relative z-0 bg-primary scrollbar scrollbar-thin' style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
          <CustomCursor /> 
          <Navbar />
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
            {/* <Hero /> */}
          </div>
          <StarsCanvas />
          <Heroo />
          <div className=''>
            <About />
            <CountdownTimer />
            <Experience />
            <Benefits />
            <PrizeMoneySection />
            <Guidelines />
            <Sponsors/>
            <CommitteeShowcase />
            <Works />
            <Support />
            <Contact />
          </div>
          <StarsCanvas />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
