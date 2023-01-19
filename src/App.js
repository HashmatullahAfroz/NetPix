import React, { useState, useEffect }  from "react";
// Css imports
import app from "./components/css/app.module.css";

// Components imports
import { Login } from "./components/login/login.js";
import { DataEntry } from "./components/DataEntry/insertion.js";
import { CardData } from "./components/DataSection/data.js";
import { Navbar } from "./components/nav/nav.js";

// components imports login
import { SignUpForm } from "./components/login/Loginform/loginForm.js";


export const App = ()=> {

// show LoginPage
  const [ showLoginPage, setLoginPage ] = useState(true);
// For authorzing the LoginPage
  const [ showAuthorizeLoginPage, setShowAuthorizeLoginPage ] = useState(true);
// show DataPage
  const [ showDataPage, setShowDataPage ] = useState(true);
// show UserInfoCustomization
  const [ showUserInfoPage, setShowUserInfoPage ] = useState(false);

// UserInfo customization
const userInfo = ()=>{
  setShowUserInfoPage(true);
}

  // Back to Insertion Page
  const backHandler = ()=>{
    setShowDataPage(false);
  }

  // Checking the situation of logging in
  useEffect(()=>{
    const logged = localStorage.getItem("react_logged");
    if(logged === "1"){
      setLoginPage(false);
    }
    if(logged === "0"){
      alert('for testing purepose username is test@hash.com and password is test1234');
    }
  }, []);

  // Checking the Authorization of logging in
  useEffect(()=>{
    const guest = localStorage.getItem("guest_authorize");
    if(guest === "2"){
      setShowAuthorizeLoginPage(false);
    }
  }, []);

// logout
const LogoutHandler = ()=>{
    localStorage.setItem("react_logged", 0);
    window.open("https://hashmatullahafroz.github.io/netpix/", "_parent");
    setLoginPage(true);
 }

 // Cancel the show User info
 const setShowUserInfoHandler = ()=>{
    setShowUserInfoPage(false);
 }

  return (
    <>
        {showLoginPage && <Login setLoginPage={setLoginPage} setAuthorizeLoginPage={setShowAuthorizeLoginPage}  />}
           {
              showUserInfoPage
                &&
            <>
             <Navbar firstBtnName={showAuthorizeLoginPage && ("Welcome Hashmatullah" || "Welcome User") } onClick={ userInfo } secondBtnName="Logout" onClickLogout={ LogoutHandler } backgroundColor="#242424" />
              <div className={`${app.usercontainer}`}>
                 <div className={`${app.row}`}>
                   <div className={`${app.coluserinfo}`} >
                        <SignUpForm  showSignUpForm={ setShowUserInfoHandler }  valueBtn1="Update" valueBtn2="Cancel" />
                   </div>
                 </div>
             </div>
          </>
           }
        {
          !showLoginPage
            &&
            <>
            <div className={`${app.container}`}>
              <div className={`${app.row}`}>
                <div className={`${app.col5}`}>
                  {
                    !showDataPage
                      &&
                    showAuthorizeLoginPage
                     &&
                      <>
                      <Navbar firstBtnName={ "Welcome Hashmatullah" } onClick={ userInfo } secondBtnName="Logout" onClickLogout={ LogoutHandler } backgroundColor="#242424" />
                      <DataEntry showDataPage={setShowDataPage}  />
                      </>
                  }
                  {
                    showDataPage
                      &&
                    <>
                      <Navbar firstBtnName={showAuthorizeLoginPage &&  ("Add Movie" || "Welcome User" )} onClick={ showAuthorizeLoginPage && ( backHandler || userInfo )} secondBtnName="Logout" onClickLogout={ LogoutHandler } backgroundColor="#242424"  />
                      <CardData  />
                    </>
                  }
                </div>
              </div>
            </div>
          </>
        }
     </>
  );
}