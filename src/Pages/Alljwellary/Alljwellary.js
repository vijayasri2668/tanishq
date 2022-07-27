import React, { useContext } from 'react'
import { UserContext } from './Category.js'
import "./Alljwellary.css";
import Sidecont from '../../Components/Sidenav/Sidecont.js';


const Alljwellary = () => {
    const [category]=useContext(UserContext)
  return (
    <>
    <div>
    <Sidecont />
    </div>
     <div className='container'>
      <div style={{ display: 'flex', flexWrap: 'wrap' }} className='rescont'>
        {category.map((result) => {
          return (
            <div key={result.id} style={{ margin: '35px', marginTop: '30px' }} className='id'>
              <div>
                <img src={result.img} alt="" style={{ width: "250px", height: "250px" }} className='imgs' />
              </div>
              <div style={{ marginTop: "30px" }} className='desc'>
                <h5>{result.description}</h5>
                <h3>Rs.{result.price}</h3>
                <h5 className='bgclr'>{result.name}</h5>
                <p>QUICK VIEW</p>
              </div>
            </div>

          );
        }

        )}
      </div>
    </div></>
  )
}
export default Alljwellary