import React, { useState } from 'react';

import nomNo from '../../images/icons/nom-no.svg';
import nomNoHover from '../../images/icons/nom-no-hover.svg';
import nomYes from '../../images/icons/nom-yes.svg';


const Movie = (props) => {
    const [nominated, setNominated] = useState(props.isNominated)

    // sends movie to nomination list and clears search
    const handleNominate = (movie) =>{
            setNominated(true)
            props.addNomination(movie)
    }

    return (
        <div className="movie">
            <div className="title">
                <h3>{props.movie.Title}</h3>
            </div>
            <div className="year">
                <p>{props.movie.Year}</p>
            </div>
                <button className="nomination-button" onClick={() => handleNominate()} disable={nominated} />
        </div>
    )
}
export default Movie;