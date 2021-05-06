import React from 'react';
import nominationNo from '../../images/nomination-no.png';
import nominationNoHover from '../../images/nomination-no-hover.png';
import nominationYes from '../../images/nomination-yes.png';

const Movie = (props) => {
    return (
        <div className="movie">
            <div className="title">
                {props.movie.Title}
            </div>
            <div className="year">
                {props.movie.Year}
            </div>
            <div className={"nomination-button"}>
                {props.movie.nominated === true ? 
                <img src={nominationYes}
                alt="nomination button nominated" 
                /> 
                : 
                <img src={nominationNo}
                alt="nomination button not nominated yet" 
                onClick={()=> props.handleNominate}
                onMouseOver={e => (e.currentTarget.src = nominationNoHover)}
                onMouseOut={e => (e.currentTarget.src = nominationNo)}/>}
                
            </div>
        </div>
    )
}
export default Movie;