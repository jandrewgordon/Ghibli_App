import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import FilmPage from './components/FilmPage';
import { useState, useEffect } from 'react';

function App() {

  const[stateFilms, setStateFilms] = useState([]);

    useEffect(() => {
        getStateFilms(); 
    }, [])

    const getStateFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res=>res.json())
        .then(data => setStateFilms(data))
    } 

  return (

    <>
    {stateFilms.length > 0?
    
      <Router>
        <Switch>

          <Route exact path="/" render = {() => {
            return <Home stateFilms={stateFilms}/>}}/>
          
          <Route path="/:id" render = {(props) => {
            const id = props.match.params.id;
            return <FilmPage stateFilms={stateFilms} id={id}/>}}/>
  
        </Switch>
      </Router>

    : <p>Loading</p>}
    </>
  );
}

export default App;
