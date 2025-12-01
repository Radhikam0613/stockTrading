import React from 'react';
function Hero() {
      return ( 
            <div className='containe p-5'>
                  <div className='row text-center'>
                        <div className='text-center'>
                              <img src='images/homeHero.png' alt = "hero img" className='mb-5' style={{width:"75%"}}></img>
                        </div>              
                        <h1 className='mt -5'>Invest in Everything</h1>
                        <p>Online platform to invest in stocks, derivatives, mutual funds, and more..</p>
                        <button
                          onClick={() => (window.location.href = "http://localhost:3000/signup")} 
                          className='p-2 btn btn-primary fs-5 mb-5' 
                          style={{width:"20%", margin: "0 auto"}
                        }>Signup Now!</button>
                  </div>
            </div>
      );
}

export default Hero;