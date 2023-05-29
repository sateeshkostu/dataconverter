import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import Mapping from "./Mapping";

const Fieldmap = () => {
    const navigate = useNavigate();

    const handleFilterClick = (option) => {
        console.log(option)
    }
    const handleFilterClick1 = (option) => {
        console.log(option)
        
    }
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-evenly", marginLeft: '350px' }}><h1 >Field Mapping</h1>
                <a href="" style={{ marginTop: '20px' }}>Load Saved Mapping</a></div>
            <div style={{ justifyContent: 'space-evenly', display: 'flex', backgroundColor: 'black', color: '#fff' }}>
                <div style={{ display: 'flex' }}><h3>Output formar Type</h3>
                    {/* <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor: 'black', color: 'white', border: 'none', fontSize: '20px' }}>

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Lic Life Insurance</Dropdown.Item>
                            <Dropdown.Item>HDFC Life Insurance</Dropdown.Item>
                            <Dropdown.Item>Apolo Life Insurance</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <select onChange={(e) => handleFilterClick1(e.target.value)}
                    >
                        <option>select</option>
                        <option value="Select" selected>
                            Lic Life Insurance
                        </option>
                        <option value="Verified">HDFC Life Insurance</option>
                        <option value="Pending">Apolo Life Insurance</option>
                    </select>
                </div>
                <div style={{ display: 'flex' }}><h3>Input formar Type</h3>
                    {/* <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor: 'black', color: 'white', border: 'none', fontSize: '20px' }}>

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>HDFC Bank Input</Dropdown.Item>
                            <Dropdown.Item>AXIS Bank Input</Dropdown.Item>
                            <Dropdown.Item>Indian Bank Input</Dropdown.Item>
                            <Dropdown.Item>SBI Bank Input</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <select onChange={(e) => handleFilterClick(e.target.value)}
                    
                    >
                        <option>select</option>
                        <option value="Select" selected>
                            HDFC Bank Input
                        </option>
                        <option value="Verified">AXIS Bank Input</option>
                        <option value="Pending">Indian Bank Input</option>
                        <option>SBI Bank Input</option>
                    </select></div>
            </div>

        </>
    )
}
export default Fieldmap;