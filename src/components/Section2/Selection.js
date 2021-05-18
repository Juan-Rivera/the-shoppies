import React from 'react';
import { useSelector } from 'react-redux';

import Incompleted from './incomplete/Incompleted';
import Completed from './complete/Completed';

const Selection = () => {
    const nominatedList = useSelector(state => state.NLreducer.nominatedList)
    
    return(
        <div id="section2">
            {nominatedList.length < 5 ? <Incompleted /> : <Completed />} 
        </div>
    )
}

export default Selection;