import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from "../features/userSlice";

const Logout = () => {


    const dispatch = useDispatch();
    const handleLogout = (e => {
        e.preventDefault();


        dispatch(logout());
    })
    return (
        <div>
            <h1>Welcome </h1> <br />
            <button className="submt_btn" onClick_button={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
