import React from "react";
import Button from 'react-bootstrap/Button';
import Fieldmap from "../../pages/Fieldmap";
import { useNavigate } from "react-router-dom";

const Output = () => {
    const navigate = useNavigate();

    const output = ()=>{
        navigate('/fieldmap')
    }
    return (
        <>
            {/* <div>
                <Button className="button2" style={{ width:'683px', backgroundColor:'#fff', color:'#12B5B0'}}>
                    Output
                </Button>
            </div> */}
            <h3 style={{ textAlign: 'center', marginTop: '30px' }}>outputfile definition</h3>
            <div style={{ display: 'flex', marginLeft: '350px', marginTop: '30px' }}>
                <div>
                    <label>Filename</label>
                    <input type="text" />
                </div>
                <div style={{ marginLeft: '100px' }}>
                    <label>Filetype</label>
                    <input type="text" />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <label>Filename</label>
                <input type="text" />
            </div>
            <button style={{width:'150px', height:'40px', borderRadius:'10px', backgroundColor:'#12B5B0', textAlign:'center', marginLeft:'300px', marginTop:'30px'}} onClick={output}>+Add Header</button>
        </>
    )
}

export default Output;