import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Alljwellary from './Pages/Alljwellary/Alljwellary';
import Collections from './Pages/Collections/Collections';
import Diamonds from './Pages/Diamonds/Diamonds';
import Digitalgold from './Pages/DigitalGold/Digitalgold';
import Earrings from './Pages/Earrings/Earrings';
import Gold from './Pages/Gold/Gold';
import Navbar from './Components/Navbar/Navbar';
import Rings from './Pages/Rings/Rings';
import Rivaah from './Pages/Rivaah/Rivaah';
import Mia from './Pages/Mia/Mia';
import Category from './Pages/Alljwellary/Category';
import BreadCrumbApp from './Components/BreadCrumbs/BreadCrumb';


function App() {
  return (
    <div>
  <Category>
    <div>
   <Router>
    <Navbar />
    <BreadCrumbApp />
    <Routes>
     <Route path='/' element={<Alljwellary />} />
      <Route path='/Alljwellary' element={<Alljwellary />} />
      <Route path='/Gold' element={<Gold/>} />
      <Route path='/Diamonds' element={<Diamonds />} />
      <Route path='/Earrings' element={<Earrings />} />
      <Route path='/Rings' element={<Rings />} />
      <Route path='/DigitalGold' element={<Digitalgold />} />
      <Route path='/Collection' element={<Collections />} />
      <Route path='/Rivaah' element={<Rivaah />}/>
      <Route path='/Mia' element={<Mia />} />
    </Routes>
   </Router>
   </div>
   </Category>
   </div>
  );
}

export default App;
