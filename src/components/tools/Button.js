import React from "react";

export const Button = (props)=>{
	return(
			<>
				<input type={props.type} className={props.className} value={props.value} onClick={ props.onClick }  />
			</>
		)
}

