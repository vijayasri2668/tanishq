import React, { useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlineLine } from "react-icons/ai";
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
    
    <div className="main-container1">

      <div className="sub-container1">

        <span className="filter-title"> Filter By</span>
      </div>

      <div>



        {Content.map((item) => {
          return (
            <>
            <div className="flex-container">
              <div className="flex1">
                <button
                  onClick={() =>
                    
                    handleFilter(item.name)

                  }
                  className="btn"
                >
                  <span className="filternameone">{item.name} </span>

                  {/* <span className="plus-minus">
                     {
                     drop[item.name] ? 
                     (<AiOutlineLine />) : (<AiOutlinePlus />)
                     }
                  </span> */}
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