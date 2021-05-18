import React from 'react';
import { useSelector } from 'react-redux';
import NomMovie from './NomMovie';

const Nominated = () => {
    const nominatedList = useSelector(state => state.NLreducer.nominatedList)

    return (
        <div className='nominated-section2'>
            <div className="nom-counter">
                <p>Nominated {nominatedList !== undefined ? nominatedList.length : 0}/5</p>
            </div>
            <div className="nom-list">
            {nominatedList !== undefined ? nominatedList.map((movie, id) => (
                    <NomMovie key={id} index={id} movie={movie} />
                )) : null}
            </div>

        </div>
    )
}
export default Nominated;