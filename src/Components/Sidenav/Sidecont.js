import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import "./sidecont.css";
import { Context } from "./Context";

const Sidecont = () => {
  const [drop, setDrop] = useState({});


  const handleChange = (name) => {
    const obj = { ...drop, 
      [name]: 
      !drop[name] 
    };
    setDrop(obj);
  };


  return (
    
    <div className="main-container">

      <div className="sub-container">

        <span className="filter-title"> Filter By</span>
      </div>

      <div>



        {Context.map((item) => {
          return (
            <>
            <div className="flex-contain">
              <div className="flex1">
                <button
                  onClick={() =>
                    
                    handleChange(item.name)

                  }
                  className="button"
                >
                  <span className="filtername">{item.name} </span>

                  <span className="plus-minus">
                     {
                     drop[item.name] ? 
                     (<AiOutlineLine />) : (<AiOutlinePlus />)
                     }
                  </span>
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

export default Sidecont;