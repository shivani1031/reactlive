import React, { useState } from 'react';

import {
    FaRegChartBar,
    FaTh, FaUserAlt, FaBars
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
const [isopen, setisopen] = useState(true);
const toggle = () => setisopen(!isopen);
const menuitem = [
    {
        path:"/",
        name:"Dashboard",
        icon: <FaTh></FaTh>
    },
    {
        path:"/about",
        name:"About",
        icon: <FaUserAlt></FaUserAlt>
    },
    {
        path:"/analytics",
        name:"Analytics",
        icon: <FaRegChartBar></FaRegChartBar>
    }
]

  return (
    <div className='container'> 
<div style= {{width: isopen ? "250px" : "50px"}} className='sidebar'>
<div className='top_section'>
    <h1 style = {{display:isopen ? "block" : "none"}} className='logo'>Logo</h1>
   <div style = {{marginLeft:isopen ? "50px" : "0px"}} className='bars'><FaBars onClick={toggle}></FaBars></div>
</div>

{
    menuitem.map((item, index)=>(
        <NavLink to = {item.path} key = {index} className= "link" activeclassname = "active">
            <div className='icons'>{item.icon}</div>
            <div style = {{display:isopen ? "block" : "none"}} className='link_text'>{item.name}</div>
        </NavLink>
    ))
}

</div>
<main>{children}</main>
</div>
  );
};

export default Sidebar