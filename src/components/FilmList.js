import FilmListItem from "./FilmListItem";
import { useState } from "react";

const FilmList = ({stateFilms}) => {

    const[order, setOrder] = useState("oldest")


    // Toggles sorting by oldest or newest
    const changeOrder = function(value) {

        // Sets order to Year
        if(value == "year"){
            if(order != "oldest"){
                setOrder("oldest")
            }
            else {
                setOrder("newest")
            }
        }

        // Sets order to Title
        if(value == "title"){
            if(order != "forward"){
                setOrder("forward")
            }
            else {
                setOrder("reverse")
            }
        }

        // Sets order to Director
        if(value == "director"){
            setOrder("director")
        }
    }

    // Sorts the films in desired order
    const sortFilms = function(stateFilms) {

        if(order == "newest"){
            stateFilms.sort((a, b) => {
                if(a.release_date < b.release_date){
                    return 1
                }
                if(a.release_date > b.release_date){
                    return -1
                }
            })
        } 
        if(order == "oldest"){
            stateFilms.sort((a, b) => {
                if(a.release_date > b.release_date){
                    return 1
                }
                if(a.release_date < b.release_date){
                    return -1
                }
            })
        }
        if(order == "forward"){
            stateFilms.sort((a, b) => {
                if(a.title > b.tite){
                    return 1
                }
                if(a.title < b.title){
                    return -1
                }
            })
        }
        if(order == "reverse"){
            stateFilms.sort((a, b) => {
                if(a.title < b.tite){
                    return 1
                }
                if(a.title > b.title){
                    return -1
                }
            })
        }
        if(order == "director"){
            stateFilms.sort((a, b) => {
                if(a.director.split(" ")[1] > b.director.split(" ")[1]){
                    return 1
                }
                else if(a.director.split(" ")[1] < b.director.split(" ")[1]){
                    return -1
                }
                else {
                    if(a.director.charAt(0) > b.director.charAt(0)){
                        return 1
                    }
                    else if(a.director.charAt(0) < b.director.charAt(0)){
                        return -1
                    }
                    else {
                        return 0
                    }

                }
            })
        }
        return stateFilms
    }

    // Converts the array into DOM elements
    const FilmListItems = stateFilms.map((film, index) => {

        sortFilms(stateFilms)
        return <FilmListItem film={film} index={index}/>

    })


    return(
        <div>
            <p>Sort by:</p>
            <button onClick={() => changeOrder("year")}>Year</button>
            <button onClick={() => changeOrder("title")}>Title</button>
            <button onClick={() => changeOrder("director")}>Director</button>
            <ul>
                {FilmListItems} 
            </ul>
        
        </div>
    )

}

export default FilmList;