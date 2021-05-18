import React, { useState } from 'react';

// redux
import { useDispatch } from 'react-redux';
import actions from '../../../store/actions';

// icons
import nomNo from '../../../images/icons/nom-no.svg';
import nomNoHover from '../../../images/icons/nom-no-hover.svg';
import nomYes from '../../../images/icons/nom-yes.svg';



const Movie = (props) => {
    const [nominated, setNominated] = useState(props.isNominated)
    const dispatch = useDispatch();
    // sends movie to nomination list and clears search
    const handleNominate = (movie) =>{
            setNominated(true)
            dispatch(actions.NLactions.addNomination(movie))
    }

    return (
        <div className="movie">
            <div className="info-container">
                <div className="title">
                    <h3>{props.movie.Title}</h3>
                </div>
                <div className="year">
                    <p>{props.movie.Year}</p>
                </div>
            </div>
            <div className="nom-button">
                {nominated ? 
                <img src={nomYes}
                alt="movie nominated" 
                /> 
                : 
                <img src={nomNo}
                alt="movie not nominated yet" 
                onClick={()=> handleNominate(props.movie)}
                onMouseOver={e => (e.currentTarget.src = nomNoHover)}
                onMouseOut={e => (e.currentTarget.src = nomNo)}/>}
            </div>
        </div>
    )
}
export default Movie;