import React from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { useState } from 'react';
import JounalSquare from '../components/JounalSquare';

function Home() {
    const [checked, setChecked] = useState(false);

    return (

        <>
            <div className='Container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-10'>
                        <JounalSquare />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;