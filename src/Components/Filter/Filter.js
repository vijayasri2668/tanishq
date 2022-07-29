import React, { useState } from "react";
import "./filter.css";
import { Content } from "./Content";

const Filter = () => {
  const [drop, setDrop] = useState({});


  const handleFilter = (name) => {
    const obj = { 
      [name]: 
      !drop[name] 
    };
    setDrop(obj);
  };


  return (
    
    <div className="first-container">

      <div className="second-container">

        <span className="titleoffilter"> Filter By</span>
      </div>

      <div>



        {Content.map((item) => {
          return (
            <>
            <div className="thirdflex-container">
              <div className="sub-flex">
                <button
                  onClick={() =>
                    
                    handleFilter(item.name)

                  }
                  className="btn"
                >
                  <span className="filternameone">{item.name} </span>

                
                </button>

              </div>
              </div>
              <></>
              {item.sub.map((event) => {
                return (
                  <div
                    key={event.id}
                    className={
                      drop[item.name] ? "tcheckcontainer": "fcheckcontainer"}>

                    <div 
                    className={event.cname}>
                      <input type="checkbox" /> {event.name}
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;