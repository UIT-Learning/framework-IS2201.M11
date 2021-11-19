import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "../../css/login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    localStorage.setItem("type", "");
    let history = useHistory();

    return (
        <>
            <div className="login">
                <div className="login-form">
                    <NavLink to="/" exact>
                        <i className="fas fa-store"></i>
                    </NavLink>
                    <div>
                        <div>
                            Username
                            <input
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            Password
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        className="loginbtn"
                        onClick={() => {
                            // localStorage.setItem("type", "Customer");
                            localStorage.setItem("type", "Manager");
                            history.replace("/");
                            localStorage.setItem("userName", UserName);
                            localStorage.setItem("password", Password);
                        }}
                    >
                        <button>Login</button>
                    </div>
                    <NavLink exact to="/Register" className="loginreg">
                        <button>Register</button>
                    </NavLink>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default Login;
