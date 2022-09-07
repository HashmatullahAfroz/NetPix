import React from "react";
// css import 
import cardStyle from "./css/card.module.css";
export const Card = (props)=>{

	return(
			<>
				<div className={`${ cardStyle.container}`} >
					<div className={`${cardStyle.card}`} >
						<div className={`${cardStyle.cardImg}`} >
							<img src={props.img} alt="movie" className={`${cardStyle.img}`}  />
						</div>
						<div className={`${cardStyle.cardBody}`} >
							<div className={`${cardStyle.cardHeader}`} >
								{props.movieName}
							</div>
							<div className={`${cardStyle.cardSubtitle}`} >
								<p style={{textAlign: 'center'}} >{props.type}</p>
								<span style={{color: 'red'}}> {props.releaseDate} </span> 
							</div>
						</div>
					</div>
				</div>
			</>
		)
}
