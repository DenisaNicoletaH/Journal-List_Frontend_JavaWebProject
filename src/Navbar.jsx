import { HeartSwitch } from "@anatoliygatt/heart-switch";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//import TimeAgo from 'react-timeago';
import ReactLiveTime from 'react-live-time';
import Robohash from 'react-robohash';
import DateTime from "./components/TimeClock";
import Settings from "./pages/Settings";
import { useEffect } from "react";


function Navbar() {
    const [checked, setChecked] = useState(false);
    const [person, setPerson] = useState(false);
    //for  displaying the robot avatar
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setPerson(prompt("Please enter your name"));
    }, []);
    /*
    const [RandomName, setRandom] = useState((Math.random() + 1).toString(36).substring(7));
    const [Type, setType] = useState("cat");
*/


    return (
        <nav className="border" style={{ height: '100px', padding: '30px' }}>



            <div className="container">
                <div className="row">

                    <div className="col-2">
                        <button className="btn btn-secondary">
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/">Home</Link>
                        </button>
                    </div>

                    <div className="col-7 text-center">

                        <h1 style={{}}>
                            Journal-List Of {person}
                        </h1>



                    </div>
                    <div className="col-1">
                        <button className="btn btn-secondary">
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/Settings">Settings</Link>
                        </button>

                    </div>



                    <div className="col-1">

                        <HeartSwitch
                            size="lg"
                            checked={checked}
                            onChange={(event) => {
                                setChecked(event.target.checked);


                            }} />


                    </div>
                    <div className="col-1" style={{ marginTop: '-15px' }}>
                        {checked && <DateTime />}
                    </div>

                </div>



            </div>
        </nav >
    );
}

export default Navbar;

/* 
recheck line 37

*/