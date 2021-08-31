import { useState, useEffect } from "react";

const FilmListItem = ({film}, index) => {

    const[showDetails, setShowDetails] = useState(false);

    const triggerFilmDetails = function() {
        setShowDetails(!showDetails);
    }

    const reformatDirectorName = (name) => {
        const nameArray = name.split(' ')

        // Formatting for Dudok de Wit is hardcoded
        if(nameArray.length < 3) {
            const lastName = nameArray.pop()
            const reformattedName = `${lastName}, ${nameArray}`
            return reformattedName
        }
        else {
            return "Dudok de Wit, Michaël"
        }       
    }
   
    return (

        <li onClick={triggerFilmDetails}>
            <h3>{film.title}</h3>
            {showDetails?
            <>
            <p>{film.release_date} - {reformatDirectorName(film.director)}</p> 
            <p>{film.description.substring(0, 200)}... <a href = {film.id}>more details</a></p> 
            </>
            : <></>}
        </li>
    )

}

export default FilmListItem;