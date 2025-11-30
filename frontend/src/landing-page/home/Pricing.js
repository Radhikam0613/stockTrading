import React from 'react';
function Pricing() {
      return ( 
            <div className='container'>
                  <div className='row p-5'>
                        <div className='col-5 p-5 fs-5'>
                              <h2>Unbeatable Pricing</h2>
                              <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                              <a href="" className=" " style={{textDecoration:"none", textAlign:"left"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>     
                        </div>
                        <div className='col-1 p-5'></div>
                        <div className='col-6 p-5'>
                              <div className='row'>
                                    <div className='col p-2 border'>
                                          <h1 className='mb-5'>₹0</h1>
                                          <p>Free equity delivery and <br></br>direct mutual funds</p>
                                    </div>
                                    <div className='col p-2 border'>
                                          <h1 className='mb-5'>₹20</h1>
                                          <p>Intraday and F&O</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Pricing;