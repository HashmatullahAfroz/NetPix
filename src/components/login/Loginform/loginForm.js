import React, { useState } from "react";
import loginForm from "../css/loginForm.module.css";

// tools imports 
import { InputText } from "../../tools/InputText.js";
import { Button } from "../../tools/Button.js";





export const SignUpForm = (props)=>{

	const [ name, setName ] = useState("");
	const [ signUser, setSignUser ] = useState("");
	const [ signPass, setSignPass ] = useState("");
	const [ signPass2, setPass2 ] = useState("");

	const signNameHandler = (e)=>{
		setName(e.target.value);
	}
	const signUsernameHandler = (e)=>{
		setSignUser(e.target.value);
	}
	const signPasswordHandler = (e)=>{
		setSignPass(e.target.value);
	}
	const signSecondPasswordHandler = (e)=>{
		setPass2(e.target.value);
	}





	const cancelHandler = ()=>{
		props.showSignUpForm(false);
	}

// Send data to DB
	const SubmitSignHandler = ()=>{
		if( name.trim().lenght === 0 || signUser.trim().length === 0 || signPass.trim().length === 0 || signPass2.trim().length === 0 ){
			alert("fill in the blank");
		}
		else{
			if(signPass === signPass2)
			{
				if( signUser.includes("@") && signUser.includes(".")){
					if( signPass.length <= 8 ){
						console.log("password should be more then 8 Characters");
					}
					else{
						let sign_obj = {
							name: name,
							username: signUser,
							password: signPass,
							authorization: 0,
						}
						let json_file = JSON.stringify(sign_obj);
						const SignUpToDataBase = async ()=>{
							const response = await fetch("http://localhost:8000/signup", {method: "POST", body: json_file, headers: {"Content-Type": "application/json"} });
							const is_signup = await response.json();
							if(is_signup){
								alert("User Created successfully")
							}else{
								alert("failed to Create user")
							}
						} 
						SignUpToDataBase();
						
						setName("");
						setSignUser("");
						setSignPass("");
						setPass2("");
					}
				}else{
						alert("invalid Email Address");
					}
			}
			else{
				alert("password should be same and more then 8 character");
			}
		}
	}

return(
			<>
				<div className={`${ loginForm.signup }`} >
					<form className={`${ loginForm.signform }`} >
						<div className={`${ loginForm.formGroup }`} >
								<label htmlFor="Name" >Name: </label>
								<InputText handler={ signNameHandler } type="text" autocomplete="off" value={ name } className={`${loginForm.formControl}`} name="name" placeholder="Name"  />
								<label htmlFor="username" >Username: </label>
								<InputText handler={ signUsernameHandler } type="text" autocomplete="off" value={signUser} className={`${loginForm.formControl}`} name="username" placeholder="example@mail.com"  />
								<label htmlFor="sign-password">Password: </label>
								<InputText handler={ signPasswordHandler } type="password" value={signPass} className={`${loginForm.formControl}`} name="sign-password" placeholder="password" />
								<label htmlFor="sign2-password">Re-Password: </label>
								<InputText handler={ signSecondPasswordHandler } type="password" value={signPass2} className={`${loginForm.formControl}`} name="sign2-password" placeholder="password" />
								<Button type="button" onClick={ SubmitSignHandler }  value={props.valueBtn1}  className={`${loginForm.btn}`} />
								<Button type="button" onClick={ cancelHandler }  value={props.valueBtn2}  className={`${loginForm.btn}`} />
						</div>
					</form>
				</div>
			</>
	)
}





export const LoginForm = (props)=>{

	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const UsernameHandler = (e)=>{
		setUser(e.target.value);
		if(user.includes("@") && user.includes(".")){
			document.getElementById("user").style.border = "none";
			document.getElementById("user").style.borderBottom = "1px solid gray";
		}else{
			document.getElementById("user").style.border = "1px solid red";
		}
	}

	const PasswordHandler = (e)=>{
		setPass(e.target.value);
		if(pass.length > 8){
			document.getElementById("password").style.border = "none";
			document.getElementById("password").style.borderBottom = "1px solid gray";
		}else{
			document.getElementById("password").style.border = "1px solid red";
		}
	}

	const SubmitLoginHandler = ()=>{
		if(user.trim().length === 0 || pass.trim().length === 0){
			alert(" fill all the blanks ");
		}else{
			if( user.includes("@") && user.includes(".")){
				if( pass.length <= 8 ){
					alert("password should be more then 8 Characters");
				}
				else{
					const LoginData = {
							username: user,
							password: pass
						}
						props.LoginData(LoginData);
						setUser("");
						setPass("");
				}
			}else{
				alert("invalid Email Address");
			}
		}
	}

		const [ showSignUp, setShowSignUp ] = useState(false);


		const SubmitSignUpHandler = ()=>{
			setShowSignUp(true);
		}
	

	return(
		<>
			<form className={` ${loginForm.Form} `} method="POST">
				<div className={` ${loginForm.formGroup}`}>
					<label htmlFor="username" >Username: </label>
					<InputText handler={ UsernameHandler } type="text" autocomplete="off" value={user} className={`${loginForm.formControl}`} name="username" placeholder="example@mail.com" id="user" />
					<label htmlFor="password">Password: </label>
					<InputText handler={ PasswordHandler } type="password" value={pass} className={`${loginForm.formControl}`} name="password" placeholder="password" id="password" />
					<Button type="button" onClick={ SubmitLoginHandler }  value="Login"  className={`${loginForm.btn}`} />
					<Button type="button" onClick={ SubmitSignUpHandler }  value="SignUp"  className={`${loginForm.btn}`} />
				</div>
			</form>
			{showSignUp && <SignUpForm showSignUpForm={setShowSignUp} valueBtn1="signUp" valueBtn2="Cancel"  /> }
		</>
	)
}

