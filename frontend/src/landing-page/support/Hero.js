import React from "react";

function Hero() {
  return (
      <div className="container-fluid p-5" style={{backgroundColor:"rgba(248, 246, 244, 1)"}}>
            <div className="row text-left" >
                  <div className="col-6">
                        <h4 className="" style={{fontSize: "42px"}}>Support Portal</h4>
                  </div>
                  <div className="col-4"></div>
                  <div className="col-2">
                        <button className="p-2 btn btn-primary" type="submit">My Tickets</button>
                  </div>
            </div>
            <div className="row">
                  <div className="col mt-5 ">
                        <input className="col-12 p-3 custom2" placeholder="Eg: How do I open my account, How do I activate F&O..." />
                        <br />
                  </div>
            </div>
            <div>
            </div>
      </div>
  );
}

export default Hero;