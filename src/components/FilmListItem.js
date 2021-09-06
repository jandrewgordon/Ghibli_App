import { useState, useEffect } from "react";

const FilmListItem = ({film}, index) => {

    const[showDetails, setShowDetails] = useState(false);
    const[jikanQuery, setJikanQuery] = useState([]);

    useEffect(() => {
        getJikanQuery(); 
    }, [])

    const jikanQueryURL = "https://api.jikan.moe/v3/search/anime?q=" + film.original_title_romanised

    const getJikanQuery = function(){
        fetch(jikanQueryURL)
        .then(res=>res.json())
        .then(data => setJikanQuery(data))
    }

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

    const filmImage = (result, film) => {

        console.log(result.start_date)

        const resultRelease = result.end_date.slice(0, 4)

        console.log(resultRelease)

        if(film.title === "The Red Turtle") {
            return <img src={"https://static.wikia.nocookie.net/studio-ghibli/images/2/28/The_Red_Turtle_-_French.jpg"} />
        }

        if(resultRelease != film.release_date){
            return <img src={jikanQuery.results[1].image_url}/> 
        }

        else {
            return <img src={jikanQuery.results[0].image_url}/> 
        }



        
    }
   
    return (

        <li onClick={triggerFilmDetails}>
            <h3>{film.title}</h3>
            {showDetails?
            <>
            <p>{film.release_date} - {reformatDirectorName(film.director)}</p>
            {jikanQuery.results != undefined ? filmImage(jikanQuery.results[0], film) : <p>Loading</p>}
            <p>{film.description.substring(0, 200)}... <a href = {film.id}>more details</a></p> 
            </>
            : <></>}
        </li>
    )

}

export default FilmListItem;