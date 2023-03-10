import React from "react";
import {NavLink} from 'react-router-dom';
// import web from " ./rocket-maker.png";
const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h2>
                Grow Your Business with{" "}
                <strong className="brand-name">techHat</strong>
              </h2>
              <h4 className="my-3">
                We are the team of talented developer making website
              </h4>
              <div className="mt-3">
                <NavLink to="./service" className="btn-get-started">
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-1 header-img">
              <img
                className="img-fluid animated"
                src="https://img.freepik.com/free-vector/couple-working-together-graphic-design_23-2148099896.jpg?w=740&t=st=1671640390~exp=1671640990~hmac=49c30cf9850e76f2fe0bfdce4929a8bf1a055263435423ab4cefc084f3717965"
                alt="img alt"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
