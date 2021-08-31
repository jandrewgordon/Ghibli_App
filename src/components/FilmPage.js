import React from "react";
import { useState, useEffect } from "react";
import { Rating, RatingView } from 'react-simple-star-rating'

const FilmPage = ({stateFilms, id}) => {

    const [rating, setRating] = useState(0)
    const [originalTitle, setOriginalTitle] = useState("romanised")

    const handleRating = (rate => {
        setRating(rate)
    })

    const findFilmById = (id) => {
        for(let film of stateFilms){
            if(film.id === id){
                return film
            }
        }
    }

    const film = findFilmById(id) 

    const toggleOriginalTitle = function() {
        originalTitle != "kana" ? setOriginalTitle("kana") : setOriginalTitle("romanised")
    }
    
    const getOriginalTitle = (film) => {

        if(originalTitle == "kana"){
            return film.original_title
        }
        if(originalTitle == "romanised"){
            return (<i>{film.original_title_romanised}</i>)
        }
    }

    return(
        <>
        <h1>{film.title}</h1>
        <h2 onClick={toggleOriginalTitle}>{getOriginalTitle(film)}</h2>
        <Rating onClick={handleRating} ratingValue={rating}/>
        <p>{film.description}</p>
        <a href="/">Back</a>
        </>
    )
}

export default FilmPage;