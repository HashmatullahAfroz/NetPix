import React from "react";
import Nav from "./css/nav.module.css";

export const Navbar = (props)=>{

  return(
     <>
         <div className={`${Nav.nav}`} style={{ background: props.backgroundColor }} >
              <ul className={`${Nav.navbar}`}>
                <li className={`${Nav.navItem}`} ><button onClick={props.onClick} className={`${Nav.navLink}`} >{ props.firstBtnName }</button></li>
                <li className={`${Nav.navItemLogout}`} ><button className={`${Nav.navLink}`}  onClick={props.onClickLogout} >{ props.secondBtnName }</button></li>
              </ul>
          </div>
   </>
   )
} 