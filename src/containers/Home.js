import React from "react";
import FilmsContainer from "./FilmsContainer";

const Home = ({stateFilms}) => {

    return(
        <>
        <header>
            <h1>Ghibli App</h1>
            <h2>List of Films:</h2>
            <FilmsContainer stateFilms={stateFilms}></FilmsContainer>
        </header>
        </>
    )
}

export default Home;