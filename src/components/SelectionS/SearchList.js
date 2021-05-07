import React from 'react';
import searchUp from '../../images/search-up.png';
import searchDown from '../../images/search-down.png';
import Movie from './Movie';

const SearchList = (props) => {
    const { searchList } = props;
    return (
        <div className="search-list">
            <div className="scroll-buttons">
                <img src={searchUp} 
                    alt="search list scroll up"
                    onClick={()=> props.handleScrollUp} />
                <img src={searchDown} 
                    alt="search list scroll down"
                    onClick={()=> props.handleScrollDown} />
            </div>
            <div className="list">
                {searchList !== undefined ? searchList.map((movie, id) => (
                    <Movie key={id} movie={movie} handleNominate={props.handleNominate}/>
                )) : <h3> Search for Movies!</h3>}
            </div>
        </div>
    )
}
export default SearchList;