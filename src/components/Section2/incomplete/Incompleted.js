import React from 'react';
import Search from '../Search/Search';
import SearchList from '../Search/SearchList';
import Nominated from '../Nominated/Nominated'

const Incompleted = () => {
    return(
        <div className="incomplete">
            <div className="left-s2">
                <Search />
                <SearchList />
            </div>
            <div className="right-s2">
                <Nominated  
                />
            </div>
        </div>
    )
}
export default Incompleted;