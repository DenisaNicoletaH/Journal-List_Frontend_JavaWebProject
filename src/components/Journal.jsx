import React from 'react';
import Home from '../pages/Home';
import ReactTimeago from 'react-timeago';
import TimeAgo from '../components/TimeAgo';

function Journal({ item }) {


    return (
        <div className='ItemDescription'>
            <li>
                {item.description}

            </li>


            <div className='AddingFriend'>
                sdf
            </div>
        </div>
    )


}



export default Journal;
