import React from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { useState } from 'react';
import JournalSquare from '../components/JounalSquare';
import Robohash from 'react-robohash';
import '../App.css';
import ReactLiveTime from 'react-live-time';
import ReactTimeago from 'react-timeago';

//import TimeAgo from 'react-timeago';

function Home() {
    const [checked, setChecked] = useState(false);
    const [RandomName, setRandom] = useState((Math.random() + 1).toString(36).substring(7));
    const [Type, setType] = useState("cat");

    return (

        <>


            <div className='Container'>
                <span style={{ marginRight: '100%' }}>
                    <Robohash
                        name={RandomName}
                        type={Type}
                        size={70}
                        background={1}
                        gravatar={true} />

                </span>
                <div>
                    <div className='AvatarButtons'>
                        <button style={{ fontSize: '15px', borderColor: "white", backgroundColor: 'lightgrey', marginLeft: '50px' }} onClick={() => {
                            setRandom(Math.random() + 1).toString(36).substring(7);
                        }}>
                            Change Avatar
                        </button>

                        <button style={{ fontSize: '15px', borderColor: "white", backgroundColor: 'lightgrey' }} onClick={() => {
                            if (Type == "cat") {
                                setType("robots");
                            } else {
                                setType("cat");
                            }
                        }}>
                            Change Avatar Type
                        </button>
                    </div>
                </div>


                <div className='row' >




                    <div className='col-12'>
                        <JournalSquare />





                    </div>
                </div>
            </div>



        </>

    );
}

export default Home;