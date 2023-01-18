import React from "react";

// import css
import DataStyle from "./css/dataTable.module.css";
import img1 from "./card/tools/img/pic (1).jpg";
import img2 from "./card/tools/img/pic (2).jpg";
import img3 from "./card/tools/img/pic (3).jpg";
import img4 from "./card/tools/img/pic (4).jpg";
import img5 from "./card/tools/img/pic (5).jpg";
import img6 from "./card/tools/img/pic (6).jpg";
import img7 from "./card/tools/img/pic (7).jpg";
import img8 from "./card/tools/img/pic (8).jpg";
import img9 from "./card/tools/img/pic (9).jpg";
import img10 from "./card/tools/img/pic (10).jpg";
// import Card component
import { Card } from "./card/Card.js";

export const CardData = (props)=>{


	// Fetch here for data collection GET response from dataBase

	return(
		<>
			<div className={`${DataStyle.contain}`} >
				<div className={`${DataStyle.row}`} >
					<Card img={img1} movieName="Lara" type="UnderWorld Movie" releaseDate="2012" />
					<Card img={img2} movieName="The Archer" type="Action Movie" releaseDate="2018" />
					<Card img={img3} movieName="The Walkers" type="Scary Movie" releaseDate="2010" />
					<Card img={img4} movieName="Watch Dog" type="Hacking Game" releaseDate="2018" />
					<Card img={img5} movieName="Watch Dog" type="Hacking Game" releaseDate="2018" />
					<Card img={img6} movieName="Hiteman" type="Action Movie" releaseDate="2015" />
					<Card img={img7} movieName="Grand Thieft Auto 5" type="Action & Mafia Game" releaseDate="2014" />
					<Card img={img8} movieName="Assassins Creed" type="Action Game" releaseDate="2015" />
					<Card img={img9} movieName="Lara" type="Action Movie" releaseDate="2014" />
					<Card img={img10} movieName="Battle field" type="Action Game" releaseDate="2020" />
				</div>
			</div>
		</>
	)
}

