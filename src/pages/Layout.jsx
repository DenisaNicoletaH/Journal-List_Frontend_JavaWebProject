import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { useState } from "react";



const formatter = buildFormatter(frenchStrings)


const Layout = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>


            <div className="container pt-5">
                <div className="row">
                    <div className="col-1">
                    </div>





                    <div className="col-10">
                        <div className="row">
                            <Navbar />



                        </div>
                        <div className="row border">
                            <div className="col-10">

                                <div className=" row border" />
                                <div className="col-sm" />

                                <Outlet />
                            </div>
                        </div>
                    </div>


                    <div className="col-1">
                        <HeartSwitch
                            size="lg"
                            checked={checked}
                            onChange={(event) => {
                                setChecked(event.target.checked);
                            }}
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Layout;