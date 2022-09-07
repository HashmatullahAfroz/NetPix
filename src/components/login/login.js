import React from "react";
import login from "./css/login.module.css"; 

// components imports
import { LoginForm } from "./Loginform/loginForm.js";

export const Login = (props)=>{


	// Login Data to App.js
	const LoginHandlerDataToApp = (loginData)=>{

	// Fetch for express and Laravel here for login page 
		const LoginFetchData = async ()=>{
			const login_data = JSON.stringify(loginData);
			const response = await fetch("http://localhost:8000/login", { method: "POST",body: login_data , headers: { "content-type": "application/json"}} ); 
			const data = await response.json();
			if(data){
							if( data.authorization === "1"){
								// for logging in
								localStorage.setItem("react_logged", 1);
								// for Authorization
								localStorage.setItem("guest_authorize", 0);
								// for the purpose of localstorage to take data while refresh (update)
								window.open("http://localhost:3000/", "_parent");
								// making false the login page for showing data
								props.setLoginPage(false);
							}else{
								localStorage.setItem("guest_authorize", 2);
								// for the purpose of localstorage to take data while refresh (update)
								window.open("http://localhost:3000/", "_parent");
								// making false the login page for showing data
								props.setLoginPage(false);
								// making false the login page for showing the authorized data for user (guest)
								props.setAuthorizeLoginPage(false);
								// for logging in
								localStorage.setItem("react_logged", 1);
							}
			}else{
				alert("Icorrect Email or Password");
			}
		}
		LoginFetchData();
	}


	return(
		<>
			<div className={`${login.coverLogin}`}>
				<div className={`${login.container}` } style={{  width: '100%'  }} >
					<LoginForm LoginData={ LoginHandlerDataToApp } />
				</div>
			</div>
		</>
		)
}
