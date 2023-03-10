import React from "react";
import Data from "./Data";
import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
              Data.map((value,index)=>{
                return<Card key={index} value={value.imgsrc} title={value.title}/>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
