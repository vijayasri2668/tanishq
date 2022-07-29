import { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import Menu from '../../Menu/Menu';
// import Alljwellary from '../../Pages/Alljwellary/Alljwellary';
import { DiamNav } from '../Mininavbar/DiamNav';
import { DigitalNav } from '../Mininavbar/DigitalNav';
import { EarringNav } from '../Mininavbar/EarringNav';
import { GoldNav } from '../Mininavbar/GoldNav';
import { JwellNav } from '../Mininavbar/JwellNav';
import { MiaNav } from '../Mininavbar/Mia';
import { RingsNav } from '../Mininavbar/RingsNav';
import { RivaahNav } from '../Mininavbar/RivaahNav';
// import Sidecont from '../Sidenav/Sidecont';
import Filter from '../Filter/Filter';
import './Navbar.css';

function Navbar(){
   // const [dropdown, showdropdown] = useState("");
  const [menu, setMenu] = useState(true);
  const [showmenu, SetShowMenu] = useState(Boolean);

  const handleChange = () => {
    setMenu(!menu);
    SetShowMenu(!showmenu);
  };
//   const [filter, setFilter] = useState("");
  const [fil, setFil] = useState(true);
  const [fildrop, SetFildrop] = useState(Boolean);

  const handleFilter = () => {
    setFil(!fil);
    SetFildrop(!fildrop);
  };

  return (
    <nav>
     <div className='header' style={{display:'flex'}}>
     <button className='menulogo' onClick={handleChange}>
          <img src='https://img.icons8.com/ios-glyphs/2x/menu.png' alt=''/>
     </button>
     <div className="menu">{showmenu && <Menu />}</div>
       
        <Link to='/' className='Link1'><img src='https://d33wubrfki0l68.cloudfront.net/9e4134ed541e29c1678c10ae60ac04ac89a622fe/33276/static/gspann-logo-118e08f639b657b898557aacd9e34333.svg' alt=''/></Link>
        
    <button className='filterlogo' onClick={handleFilter}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAWlBMVEX///9kZGRfX1+enp5gYGD8/PxcXFyKior39/epqalWVlZlZWXY2NhYWFibm5v09PTMzMzGxsbT09Ovr6+RkZFqamp3d3d/f3+/v7+VlZVSUlKNjY2GhoZ6enr7JSzQAAAC1klEQVR4nO3cYXeaMBiGYaEkICmiVbu1bv//b44AKquokLCRl97Xx57THZ7y+BKCY7UCAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDmolZrO3GH6qDTW8VT0Zu44t/ZFNKH859x5bhySKQPq9dx5bmzz+sgS33Y2f6f8de48t9LY5tu8ePqwCeMAP4OrUtsj867Wh/07mWyKI5raLm+65THkVdP0EAtq1SU9el3EsnrChFhQq6wCGv3i80+c4shEJswrfdWvnW+/toV3y/+tNIlM4l7SLA65oFY9Sd1LerABoykPaGKeJbUT1ORv0x7T1OpJapxKmunQC2qVhfMkbVazwc6XRlVS10FoJ6gJ9RJ/UcX6VZU0OY7+zfAn6FkZO03Sg/uH9387l3SUZg0a+AQ9c1iTZsHeJPUZXVIlqaDWLh85EOuCfoY+QS/U2JKWSTNBpZxBNbakp7agUgKu2kk6tHNB38X3U/XlfmBJ7QQ1Ii7xXecbp2cR1bWgwgyepFuXdcH8Bk/STNgEvRp4d18XNPSbpB5q4Jq0KaiQNehXA0qa2W1CMWvQr+zd/ZOSHoQWtPVkM1/JLqiVPt4HlLHN9MiTSdoWVGxDO1tQvbb+j6PmV5X03ma+nG2mR6qSmjslFXYXf8/dkm7H3vaH6s7l/rwGla+6uzc9m/kn/8fBoegtaV1QOdtMDzSb+SZ5//vHZikFtcrbx0b1GmYZBbVOSV9A/+/UBCP9ngED/MKdKwJKR0DpCCgdAaUjoHQElI6A0hFQOgJKR0DpCCgdAaX7lgHNsgOqRZ/B7G39HubLAFx1ApZVuM+ifh3A0p4uNWdOF7p5mUP1GdzPfVyTsQHN+neh9eVlFYkuTLmYJ7z2/y5HcdIJF//Yv65kf4erK026Zy6vwgX5Kgd3bcD2zC3mvF3tCxtOL+/MXWyOyzxzAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDOH8qlHdRuP8lTAAAAAElFTkSuQmCC' style={{height:'90px'}} alt='' /> 

    </button>
    <div className='filertarrow'>{ fildrop && <Filter />}</div>

        <div className='Link1'>
             <NavLink to='/Alljwellary' className='link jwellery'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }}>ALL JWELLERY</NavLink>
                  <JwellNav></JwellNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Gold' className='link gold'   style={{
                    marginLeft: "30px",
                    fontWeight: "bold",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#282C3F",
                    padding:'20px'
                  }} >GOLD</NavLink>
                  <GoldNav></GoldNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Diamonds' className='link diamonds'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }} >DIAMOND</NavLink>
                  <DiamNav></DiamNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Earrings' className='link earrings'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }}>EARRINGS</NavLink>
               <EarringNav></EarringNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Rings' className='link rings'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }}>RINGS</NavLink>
                   <RingsNav></RingsNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Digitalgold' className='link digital'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'  
                  }}>DIGITAL-GOLD</NavLink>
                  <DigitalNav></DigitalNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Rivaah'className='link rivaah'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }}>RIVAAH</NavLink>
                  <RivaahNav></RivaahNav>
        </div>
        <div className='Link1'>
             <NavLink to='/Mia' className='link mia'   style={{
                     marginLeft: "30px",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     padding:'20px'
                  }} >MIA</NavLink>
                  <MiaNav></MiaNav>
        </div>
     </div>

   </nav>
   
  )
}

export default Navbar