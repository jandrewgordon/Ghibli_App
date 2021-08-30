import React from 'react';
import { useState, useEffect } from 'react';
import FilmList from '../components/FilmList';

const FilmsContainer = ({stateFilms}) => {

    return (
        <ul>
            <FilmList stateFilms={stateFilms}/>         
        </ul>
    )
}

export default FilmsContainer;