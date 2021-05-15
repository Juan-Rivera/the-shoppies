import React from 'react';
import removeButton from '../../../images/icons/x-circle.svg'

const NomMovie = (props) => {
    
    return(
        <div className='nominated-movie'>
            <div className="title">
                {props.movie.Title}
            </div>
            <div className="year">
                {props.movie.Year}
            </div>
            <div>
                <img src={removeButton} />
            </div>
        </div>
    )
}
export default NomMovie;