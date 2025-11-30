import React from 'react';
function Awards() {
      return ( 
            <div className='container p-5 mb-5'>
                  <div className='row'>
                        <div className='col-lg-6 col-sm-12 mt-5'>
                              <img src='images/largestBroker.svg'></img>
                        </div>
                        <div className='col-lg-6 col-sm-12 mt-2'>
                              <h1 className='mt-5'>Largest stock broker in India</h1>
                              <p>2+ million Zerodha clients contribute to obver 15% of all </p>
                              <div className='row'>
                                    <div className='col-6 p-2'>
                                          <ul>
                                                <li><p>Futures and Options</p></li>
                                                <li><p>Commodity derivatives</p></li>
                                                <li><p>Currency derivatives</p></li>
                                          </ul>
                                    </div>
                                    <div className='col-6 p-2'>
                                          <ul>
                                                <li><p>Stocks & IPOs</p></li>
                                                <li><p>Direct mutual funds</p></li>
                                                <li><p>Bonds and Govt. Securities</p></li>
                                          </ul>
                                    </div>
                              </div>
                              <img src="images/pressLogos.png" style={{ width: "90%" }} />
                        </div>
                  </div>
            </div>
      );
}

export default Awards;