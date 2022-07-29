import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'
const BreadCrumbApp=()=>{
 const location =useLocation();
 const breadCrumbView=()=>{
  const {pathname}=location;
  const pathnames=pathname.split("/").filter((item)=>item);
  return(
    <div className='breadcrumb'>
      <Breadcrumb>
           {pathnames.length>0?(
            <Breadcrumb.Item>
            <Link to='/' className='link'>HOME</Link>
            </Breadcrumb.Item>
           ):(
            
            <div> HOME/</div>
           
           )}
           <div className='breadflex'> 
           {pathnames.map((name,index)=>{
            const routeTo=`/${pathnames.slice(0,index+1).join('/')}`;
            const isLast=index=== pathnames.length-1;
            return isLast?(
              <Breadcrumb.Item>
              {name.toUpperCase()}
              </Breadcrumb.Item>
            ):(
              <Breadcrumb.Item>
              <Link to={`${routeTo}`}>{name.toUpperCase()}</Link>
              </Breadcrumb.Item>
            )
           })}
           </div>
      </Breadcrumb>
    </div>
  )
 }
 return <>{breadCrumbView()}</>
}

export default BreadCrumbApp