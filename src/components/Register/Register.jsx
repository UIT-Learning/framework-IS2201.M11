import React from "react";
import "../../css/register.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    let history = useHistory(); // khi bấm đăng kí chuyển đến trang chính luôn
    const [AccountTemp, setAccountTemp] = useState({});
    // thông báo thành công
    const notify = () => {
        toast.success("Success!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    // thông báo thất bại
    const notify1 = (s) => {
        toast.error(s, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <div className="register">
                <div className="register-form">
                    <NavLink to="/" exact>
                        <i className="fas fa-store"></i>
                    </NavLink>
                    <div>
                        <div>
                            <div>
                                Name
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        AccountTemp.fName = e.target.value;
                                    }}
                                />
                            </div>
                            <div>
                                Email
                                <input
                                    type="email"
                                    onChange={(e) => {
                                        AccountTemp.lName = e.target.value;
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            Username
                            <input
                                type="text"
                                onChange={(e) => {
                                    AccountTemp.userName = e.target.value;
                                }}
                            />
                        </div>
                        <div>
                            Avatar
                            <input type="file" name="avatar" id="" />
                        </div>
                        <div>
                            Password
                            <input
                                type="password"
                                onChange={(e) => {
                                    AccountTemp.password = e.target.value;
                                }}
                            />
                        </div>
                        <div>
                            Confirm Password
                            <input
                                type="password"
                                onChange={(e) => {
                                    AccountTemp.password = e.target.value;
                                }}
                            />
                        </div>
                    </div>
                    <div className="loginbtn" to="/Login" exact>
                        <button>Register</button>
                    </div>
                    <NavLink className="loginreg" to="/Login" exact>
                        <button onClick={() => setAccountTemp({})}>
                            Login
                        </button>
                    </NavLink>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default Register;
