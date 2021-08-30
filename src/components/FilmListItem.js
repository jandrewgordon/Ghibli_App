import { useState, useEffect } from "react";

const FilmListItem = ({film}, index) => {

    const[showDetails, setShowDetails] = useState(false);

    const triggerFilmDetails = function() {
        setShowDetails(!showDetails);
    }
   
    return (

        <li onClick={triggerFilmDetails}>
            <h3>{film.title}</h3>
            {showDetails?
            <>
            <p>{film.release_date}</p> 
            <p>{film.description.substring(0, 200)}... <a href = {film.id}>more details</a></p> 
            </>
            : <></>}
        </li>
    )

}

export default FilmListItem;