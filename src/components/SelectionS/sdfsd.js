// import React, { useEffect, useState } from 'react';
// import searchUp from '../../images/icons/list-up.svg';
// import searchDown from '../../images/icons/list-down.svg';
// import Movie from './Movie';

// const SearchList = (props) => {
//     const { searchList } = props;
//     const [page, setPage] = useState(0)

//     // paged list
//     let list = null
    
//     useEffect(()=> {
//         if(searchList === undefined){
//             return 'loading...'
//         }else{
//             const newSL = searchList.slice(4*page, 4*page+4)
//             list = newSL.map((movie) => {
//                 const isNominated = props.nominatedList.include(movie)
    
//                 return <Movie 
//                 key={movie.imdbID} 
//                 movie={movie} 
//                 addNomination={props.addNomination} 
//                 index={index} 
//                 isNominated={isNominated}
//                 />
//             })
//         }
//     },[page])

    

//     useEffect(()=>{
//         // resets page back to 0 whenever a new search occurs
//         setPage(0)
//     }, [searchList])
    
//     // changes the page up or down with a range of 0-maxPages(calulcuted)
//     const handlePage = (x) => {
//         const maxPages = Math.ceil(searchList.length/4)-1;
//         if(x === 0){
//             if(page < maxPages){
//                 setPage(page+1)
//             }
//         }else if(x === 1){
//             if(page > 0){
//                 setPage(page-1)
//             }
//         }
//     }
//     return (
//         <div className="search-list">
//             <div className="scroll-buttons">
//                 <img src={searchUp} 
//                     alt="search list scroll up"
//                     onClick={() => handlePage(1)} />
//                 <img src={searchDown} 
//                     alt="search list scroll down"
//                     onClick={() => handlePage(0)} />
//             </div>
//             <div className="list">
//                 {list}
//             </div>
//         </div>
//     )
// }
// export default SearchList;


//         // const newSL = searchList.slice(4*page, 4*page+4)
//         // console.log(newSL)
//         // list = newSL.map((movie, index) => {
//         //     const isNominated = nominatedList.find(nom => nom === movie)
//         //     console.log(isNominated)
//         //     return <Movie 
//         //     key={movie.imdbID} 
//         //     movie={movie} 
//         //     addNomination={props.addNomination} 
//         //     index={index} 
//         //     isNominated={isNominated}
//         //     />
//         //     })
//         //     console.log(list)
//     useEffect(()=>{

//     }, [searchList])
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import searchUp from '../../images/icons/list-up.svg';
import searchDown from '../../images/icons/list-down.svg';
import Movie from './Movie';

const SearchList = (props) => {
    const [page, setPage] = useState(0)

    const searchList = useSelector(state => state.SLreducer.searchList)
    const nominatedList = useSelector(state => state.NLreducer.nominatedList)
    const maxPages = Math.ceil(searchList.length/4)-1;
    // console.log(searchList)
    // console.log(nominatedList)

    // paged list
    let list = []
    let display = []
    
    // ------------------------------------------------------------------------//

    // populates FULL LIST
    const handleList = () => {
        if(searchList){
            for(let i = 0; i > maxPages; i++){
                list[i] = searchList.slice(4*i, 4*i+4)
            }
        }
        
    }

    useEffect(()=> {
        handleList()
    },[searchList])

    // ------------------------------------------------------------------------//

    // changes the page up or down with a range of 0-maxPages(calulcuted)
    const handlePage = (x) => {
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
    useEffect(()=>{
        // resets page back to 0 whenever a new search occurs
        setPage(0)
    }, [searchList])

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
                {display}
            </div>
        </div>
    )
}
export default SearchList;


// // handles display
// useEffect(()=> {
        
//     display = list[page].map((movie, index) => {
//         const findNominated = nominatedList.find(nom => nom.imdbID === movie.imdbID)
//         
//         return <Movie 
//             key={movie.imdbID} 
//             movie={movie} 
//             addNomination={props.addNomination} 
//             index={index} 
//             isNominated={isNominated}
//         />
//     })

// }, [list])