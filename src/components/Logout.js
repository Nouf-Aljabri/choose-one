import React from "react";
import { setAuthUser } from "../actions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


export default function Logout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthUser([]));   
       
    }, []);
  
    return (<div> <Navigate to="/" replace={true} /> </div>)
}