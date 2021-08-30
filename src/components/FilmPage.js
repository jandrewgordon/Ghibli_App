import React from "react";

const FilmPage = ({stateFilms, id}) => {

    const findFilmById = (id) => {
        for(let film of stateFilms){
            if(film.id === id){
                return film
            }
        }
    }

    const film = findFilmById(id)    

    return(
        <>
        <h1>{film.title}</h1>
        <p>{film.description}</p>
        <a href="/">Back</a>
        </>
    )
}

export default FilmPage;