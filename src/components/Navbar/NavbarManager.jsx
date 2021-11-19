import React from "react";
import "../../css/navbar.css";
import { NavLink } from "react-router-dom";

const NavbarManager = ({ setUser }) => {
    return (
        <>
            <div className="nav-behind"></div>
            <nav className="nav-bar">
                <NavLink activeClassName="active" exact to="/">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-home-alt"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/category">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-list"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/voucher">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fal fa-ticket"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/History">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-history"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/manageorder">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-tasks"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/ManageAccount">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-user"></i>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/Setting">
                    <b></b>
                    <b></b>
                    <div>
                        <i className="fas fa-cog"></i>
                    </div>
                </NavLink>
                <NavLink
                    exact
                    to="/Login"
                    onClick={() => {
                        localStorage.setItem("type", "");
                        localStorage.setItem("userName", "");
                        localStorage.setItem("password", "");
                        setUser({});
                    }}
                >
                    <div>
                        <i className="fas fa-sign-out"></i>
                    </div>
                </NavLink>
            </nav>
        </>
    );
};

export default NavbarManager;
