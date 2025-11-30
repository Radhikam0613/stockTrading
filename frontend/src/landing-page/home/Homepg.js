import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Edu from './Edu';
import Openacc from '../Openacc';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Homepg() {
      return (  
            <>
                  <Hero />
                  <Awards />
                  <Stats />
                  <Pricing />
                  <Edu />
                  <Openacc />
            </>
      );
}

export default Homepg;