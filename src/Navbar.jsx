import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border">
            <div className="container">
                <div className="row">

                    <div className="col-2">
                        <button className="btn btn-secondary">
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/">Home</Link>
                        </button>
                    </div>

                    <div className="col-8 text-center">
                        <h1>Journal-List</h1>
                    </div>

                    
                    <div className="col-2">
                        <button className="btn btn-secondary">
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/Settings">Settings</Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;