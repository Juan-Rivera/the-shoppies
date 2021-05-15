import React from 'react';
import SearchList from './SearchList';
import Search from './Search';
import Nominated from './Nominated/Nominated';

import { connect } from 'react-redux';
import { fetchMovies, clearMovies } from '../../store/actions/SLactions';
import { addNomination, deleteNomination } from '../../store/actions/NLactions';

const Selection = (props) => {
    // const nominatedList = useSelector(state => state.NLreducer.nominatedList)
    
    return(
        <div id="section2">
            <div id="left-s2">
                <Search 
                handleSearch={props.fetchMovies}
                />

                <SearchList  
                addNomination={props.addNomination} 
                clearMovies={props.clearMovies}
                />
            </div>
            <div id="right-s2">
                {/* <Nominated 
                nominatedList={props.nominatedList} 
                deleteNomination={props.deleteNomination}
                /> */}
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchList: state.SLreducer.searchList,
        nominatedList: state.NLreducer.nominatedList,
    }
}
export default connect(mapStateToProps, {fetchMovies, addNomination, deleteNomination, clearMovies}) (Selection)