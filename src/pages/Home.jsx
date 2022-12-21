import React from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { useState } from 'react';
import JounalSquare from '../components/JounalSquare';
import Robohash from 'react-robohash';
import '../App.css';
import ReactLiveTime from 'react-live-time';
import '../components/ToWriteMessage';

//import TimeAgo from 'react-timeago';

function Home() {
    const [checked, setChecked] = useState(false);
    return (

        <>

            <div className='Container'>
                <div className='row'>

                    <div className='border border-4 col-2'>


                        <ul>
                            <ReactLiveTime time={Date.now()} />
                        </ul>


                    </div>


                    <div className='col-10'>

                        <div className='row'>



                            <JounalSquare />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;