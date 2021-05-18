import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import searchUp from '../../../images/icons/list-up.svg';
import searchDown from '../../../images/icons/list-down.svg';
import { paginate } from '../../../utilities/searchList/Paginate.js';

import Movie from './Movie';

const SearchList = () => {
    const [page, setPage] = useState(0)
    const [display, setDisplay] = useState([])

    // redux states
    const searchList = useSelector(state => state.SLreducer.searchList)
    const nominatedList = useSelector(state => state.NLreducer.nominatedList)

    let paginatedList = [];
    
    // ------------------------------------------------------------------------//

    // handles new search. will reset page back to 0
    useEffect(()=> {
        setPage(0)
    },[searchList])

    // handles display
    useEffect(() => {
        paginatedList = paginate(searchList)
        if(paginatedList !== undefined){
            setDisplay(paginatedList[page]);
        }
    }, [searchList, page])
    // ------------------------------------------------------------------------//

    // changes the page up or down with a range of 0-maxPages(calculated)
    const handlePage = (x) => {
        const maxPages = Math.ceil(searchList.length/4)-1;
        if(x === 0){
            if(page < maxPages){
                setPage(page+1)
            }
        }else if(x === 1){
            if(page > 0){
                setPage(page-1)
            }
        }
    }

    // ------------------------------------------------------------------------//

    return (
        <div className="search-list">
            <div className="scroll-buttons">
                <img src={searchUp} 
                    alt="search list scroll up"
                    onClick={() => handlePage(1)} />
                <img src={searchDown} 
                    alt="search list scroll down"
                    onClick={() => handlePage(0)} />
            </div>
            <div className="list">
                {display !== undefined ? display.map((movie) => {
                    let isNominated = nominatedList.includes(movie)
                        return <Movie 
                                    key={movie.imdbID} 
                                    movie={movie}  
                                    isNominated={isNominated}
                                />
                }) : null}
            </div>
        </div>
    )
}
export default SearchList;