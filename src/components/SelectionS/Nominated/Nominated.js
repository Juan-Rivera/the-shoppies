import React, { useEffect } from 'react';
import NomMovie from './NomMovie';

const Nominated = (props) => {
    const { nominatedList } = props;
    let list = [];
    
    useEffect(()=>{
        list = nominatedList
    },[nominatedList])
    return (
        <div className='nominated-section2'>
            <div>
                <p>Nominated {nominatedList !== undefined ? nominatedList.length : 0}/5</p>
            </div>
            <div>
            {list !== undefined ? list.map((movie, id) => (
                    <NomMovie key={id} movie={movie} />
                )) : <h3> Nominate Your Favorite Movies! </h3>}
            </div>

        </div>
    )
}
export default Nominated;