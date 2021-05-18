import React from 'react';
import Nominated from '../Nominated/Nominated';
import submit from '../../../images/icons/submit.svg';

const Completed = () => {
    return(
        <div className="complete">
            <div className="completed-banner">
                <h1> Congrats! </h1>
                <p> You have successfully chosen your 5 films. </p>
                <p> Would you like to submit these films for the shoppies awards? </p>
                <a href="/submitted"> <img src={submit} alt="submit button"/> </a> 
            </div>
            <div className="right-s2 nom-complete">
                <Nominated  
                />
                
            </div>
        </div>
    )
}
export default Completed;