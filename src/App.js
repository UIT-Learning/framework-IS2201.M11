import React, { useState } from "react";
import "./css/style.css";
import Customer from "./Pages/Customer";
import Manager from "./Pages/Manager";
import HomePage from "./Pages/HomePage";

const App = () => {
    const [User, setUser] = useState({});

    if (localStorage.getItem("type") === "Customer")
        return <Customer setUser={setUser} User={User} />;
    else if (localStorage.getItem("type") === "Manager")
        return <Manager setUser={setUser} User={User} />;
    else return <HomePage setUser={setUser} />;
};

export default App;
