import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import Templetes from "./Templetes";

const Mytemplete = () => {
    const navigate = useNavigate()

    const opentemplete = () =>{
        navigate('/Templetes')
    }
    return(
        <>
        <div style={{textAlign:'right', margin:'30px',}}>
        <button style={{backgroundColor:'#12B5B0', width:'200px', height:'40px', borderRadius:'20px', color:'#fff'}} onClick={opentemplete}>Create New Templete</button>
        </div>
        <h1 style={{marginLeft:'30px'}}>My Templetes</h1>
        </>
    )
}

export default Mytemplete;