import React, { useState } from "react";
import insertion from "./css/insertion.module.css";

// tools imports
import { InputText } from "../tools/InputText.js";
import { Button } from "../tools/Button.js";

export const DataEntry = (props)=>{

	const [addMovie, setAddMovie] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [img, setImg] = useState("");
	const [type, setType] = useState("Scary Movie");
	const [error, setError] = useState("");

	const movieHandler = (e)=>{
		setAddMovie(e.target.value);
	}
	const releaseDateHandler = (e)=>{
		setReleaseDate(e.target.value);
	}
	const pictureHandler = (e)=>{
		setImg(e.target.value);
	}
	const typeHandler = (e)=>{
		setType(e.target.value);
	}

	const InsertDataHandler = ()=>{
		if( addMovie.trim().length === 0 ){
			setError("Please fill in the blanks")
			document.getElementById("fill_error").style.background = "firebrick";
			document.getElementById("fill_error").style.display = "block";
			setTimeout(()=>{
				document.getElementById("fill_error").style.display = "none";
			}, 3000);
		}else{
			const obj = {
				addMovieName: addMovie,
				movieReleaseDate: releaseDate,
				movieImg: img,
				movieType: type
			};

			const jsonData = JSON.stringify(obj);

			const InsertMovieImg = async ()=>{
				const response = await fetch("http://localhost:8000/movie", {method: "POST", body: jsonData, headers: { "content-type": "application/json" }});
				const is_insert = await response.json();
				if(is_insert){
					setError("Data Added Successfully");
					document.getElementById("fill_error").style.display = "block";
					document.getElementById("fill_error").style.background = "green";
					setTimeout(()=>{
							document.getElementById("fill_error").style.display = "none";
						}, 3000);
				}else{
					alert("Failed to Add");
				}
			}
			InsertMovieImg();




			setAddMovie("");
			setReleaseDate("");
			setType("");

		}
	}

	const showDataPageHandler = ()=>{
		props.showDataPage(true);
	}

	return(
			<>
				<div className={` ${insertion.contain} `} style={{ color: 'white' }} >
					<form method="GET" style={{ width: "80%"}}>
							<div className={`${insertion.formGroup}`}>
								<label htmlFor="Add Movie" >Add Movie: </label>
				 				<div className={`${insertion.error}`} id="fill_error" >{error}</div>
								<InputText type="text" handler={ movieHandler } value={addMovie} name="name" placeholder="Add movie" className={`${insertion.formControl}`} autocomplete="off" />
								<label htmlFor="releaseDate" >Release Date: </label>
								<InputText type="date" handler={ releaseDateHandler }  value={releaseDate}  name="releaseDate" className={`${insertion.formControl}`} autocomplete="off" />
								<label htmlFor="moviePicture" >Add Movie Picture</label>
								<InputText type="file" handler={ pictureHandler } name="moviePicture" className={`${insertion.formControl}`} />
								<select onChange={ typeHandler } style={{ margin: '10px 0px', padding: "10px", background: "#aaa" }}>
									<option>Scray Movie</option><option>Comedy Movie</option><option>Action Movie</option>
								</select>
								<Button type="button" onClick={ InsertDataHandler } value="Insert" className={` ${insertion.btn} `} />
								<Button type="button" onClick={ showDataPageHandler } value="Show Movies" className={` ${insertion.Data_btn} `} />
							</div>
					</form>
				</div>
			</>
		)
}
