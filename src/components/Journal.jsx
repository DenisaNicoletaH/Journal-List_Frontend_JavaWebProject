import React from 'react';
import Home from '../pages/Home';
import ReactTimeago from 'react-timeago';
import TimeAgo from '../components/TimeAgo';

function Journal({ item }) {
    /*
        if (item == true) {
            <TimeAgo />
        }
        */
    return (
     

  
       <li>
                
                {item.description}   
    
            </li>
            

    )
  

}



export default Journal;
