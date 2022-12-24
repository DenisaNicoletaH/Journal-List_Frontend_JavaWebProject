import React from 'react';
import Home from '../pages/Home';
import ReactTimeago from 'react-timeago';
import TimeAgo from '../components/TimeAgo';
import axios from 'axios';
import { loadTodosFromAPI } from './JounalSquare';


function Journal({ item, setComplete }) {



    console.log(item);
    return (
        <div className='ItemDescription container'>
            <div className='row'>
                <div className='col-4'>
                    {item.description}
                </div>
                <div className='col-3'>
                    {item.friend != null && item.friend.userName}
                </div>

                <div className='col-5'>
                    {item.image != null && <img src={item.image.url} style={{ width: '150px', paddingTop: '20px', textAlign: 'center' }} />}
                </div>
            </div>





            <div>

            </div>
        </div>
    )


}



export default Journal;
