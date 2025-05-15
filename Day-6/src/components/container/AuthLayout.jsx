import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export default Protected = ({ children, authentication }) => {
   
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {

        // if (authStatus === true) {
        //     navigate("/")
        // }else if (authStatus === false) {
        //     navigate("/login")
        // }
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }else if (!authentication && authStatus !== authentication) {
            navigate("/login")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])

    loader ? <h1>Loading...</h1> : <> { children } </>
}

 