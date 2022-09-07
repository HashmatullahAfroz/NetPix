import React from "react";

// import css
import DataStyle from "./css/dataTable.module.css";
import img from "./card/tools/img/pic (3).jpg";
import img1 from "./card/tools/img/pic (1).jpg";
// import Card component
import { Card } from "./card/Card.js";

export const CardData = (props)=>{


	// Fetch here for data collection GET response from dataBase

	return(
		<>
			<div className={`${DataStyle.contain}`} >
				<div className={`${DataStyle.row}`} >
					<Card img={img} movieName="Avenger" type="Action Movie" releaseDate="2012" />
					<Card img={img1} movieName="The Witch" type="Scary Movie" releaseDate="2018" />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	)
} 

