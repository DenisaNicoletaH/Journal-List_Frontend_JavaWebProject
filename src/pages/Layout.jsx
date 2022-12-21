import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { useState } from "react";
import Robohash from 'react-robohash';
import ReactLiveTime from 'react-live-time';

import '../App.css';







const Layout = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>



            <div className="row">

                <Navbar />
            </div>

            <div>

                <div className="row border">


                    <div className="col-1">

                    </div>
                    <div className="col-10">



                        <Outlet />
                    </div>
                </div>
                <div className="col-1">


                </div>

            </div>






        </>
    );
};

export default Layout;