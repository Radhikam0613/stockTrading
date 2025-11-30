import React from 'react';
function Footer() {
      return (  
            <footer className='' style={{backgroundColor:"rgba(248, 246, 244, 1)"}}>
                  <div className='container border-top text-muted'>
                  <div className='row mt-5'>
                        <div className='col'>
                              <img src='images/logo.svg' style={{width:"40%"}}></img>
                              <p>
                                    &copy;
                                    2010 - 2025, Zerodha Broking Ltd.<br></br>All rights reserved.
                              </p>
                        </div>
                        <div className='col'>
                              <p>Company</p>
                              <a href='' className="text-muted custom "> About</a><br/>
                              <a href='' className="text-muted custom"> Philosophy</a><br/>
                              <a href='' className="text-muted custom"> Press & media</a><br/>
                              <a href='' className="text-muted custom"> Careers</a><br/>
                              <a href='' className="text-muted custom"> Zerodha Cares (CSR)</a><br/>
                              <a href='' className="text-muted custom"> Zerodha.tech</a><br/>
                              <a href='' className="text-muted custom">Open source</a><br/>
                        </div>
                        <div className='col'>
                              <p>Support</p>
                             <a href="" className="text-muted custom">Contact us</a><br></br>
                             <a href="" className="text-muted custom">Support portal</a><br></br>
                             <a href="" className="text-muted custom">How to file a complaint?</a><br></br>
                             <a href="" className="text-muted custom">Status of your complaints</a><br></br>
                             <a href="" className="text-muted custom">Bulletin</a><br></br>
                             <a href="" className="text-muted custom">Circular</a><br></br>
                             <a href="" className="text-muted custom">Z-Connect blog</a><br></br>
                             <a href="" className="text-muted custom">Downloads</a><br></br>
                        </div>
                        <div className='col'>
                              <p>Account</p>
                              <a href='' className="text-muted custom">Open demat account</a><br></br>
                              <a href='' className="text-muted custom">Minor demat account</a><br></br>
                              <a href='' className="text-muted custom">NRI demat account</a><br></br>
                              <a href='' className="text-muted custom">Commodity</a><br></br>
                              <a href='' className="text-muted custom">Dematerialisation</a><br></br>
                              <a href='' className="text-muted custom">Fund transfer</a><br></br>
                              <a href='' className="text-muted custom">MTF</a><br></br>
                              <a href='' className="text-muted custom">Referral program</a><br></br>
                        </div>
                  </div>

                  <div className='footer text-muted fs-6 mt-5 '>
                        <p style={{fontSize: "13px"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                        <p style={{fontSize: "13px"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                        <p style={{fontSize: "13px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                        <div className="footerEnd mb-3 ">
            <ul>
              <li>
                <a href="">NSE</a>
              </li>
              <li>
                <a href="">BSE</a>
              </li>
              <li>
                <a href="">MCX</a>
              </li>
              <li>
                <a href="">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="">Policies &amp; procedures</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Disclosure</a>
              </li>
              <li>
                <a href="">For investor's attention</a>
              </li>
              <li>
                <a href="">Investor charter</a>
              </li>
            </ul>
          </div>
                  </div>
            </div>
            </footer>
      );
}

export default Footer;