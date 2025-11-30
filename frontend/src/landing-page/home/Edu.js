import React from 'react';
function Edu() {
      return ( 
            <div className='container'>
                  <div className='row'>
                        <div className='col-lg-6 col col-sm-12 text-center p-2'>
                              <img src='images/education.svg'></img>
                        </div>
                        <div className='col-lg-6 col col-sm-12 mb-5'>
                              <h2 className='p-2 mt-5'>Free and open market education</h2>
                              <p className='p-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                              <a href="" className="" style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right-long"></i></a>
                              <p className='p-2 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                              <a href="" className="mb-5" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        
                  </div>
            </div>       
      );
}

export default Edu;