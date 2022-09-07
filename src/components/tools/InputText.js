import React from "react";
	
export const InputText = (props)=>{

 
	return(
			<>
				<input type={props.type} onChange={ props.handler } value={props.value}  autoComplete={props.autocomplete} className={props.className} name={props.name} placeholder={ props.placeholder } id={props.id}  />
			</>
		)
}
