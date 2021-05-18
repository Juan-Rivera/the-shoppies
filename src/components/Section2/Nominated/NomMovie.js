import React from 'react';
import { useDispatch } from 'react-redux';
import removeButton from '../../../images/icons/x-circle.svg'
import actions from '../../../store/actions';

const NomMovie = (props) => {
    const dispatch = useDispatch()
    
    return(
        <div className='nom-movie'>
            <div className="nom-contain">
                <div className="index">
                    <h1>{props.index + 1}</h1>
                </div>
                <div className="nom-info">
                    <div className="nom-title">
                        <p>{props.movie.Title}</p> 
                    </div>
                    <div className="nom-year">
                        <p>{props.movie.Year}</p> 
                    </div>
                </div>

            </div>
            <div className="nom-remove">
                <img 
                src={removeButton} 
                onClick={() => dispatch(actions.NLactions.deleteNomination(props.movie))}
                alt="button to remove nomination" 
                />
            </div>
        </div>
    )
}
export default NomMovie;