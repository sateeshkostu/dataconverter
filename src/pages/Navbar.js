import React, { useState } from "react";
import { Icon } from '@iconify/react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Dropdown } from "bootstrap";

import Templetes from "./Templetes";
import Home from "./Home";
import Profilepopup from "./Profilepopup";


const Navbar = () => {
    const [lgShow, setLgShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <nav style={{ display: 'flex' }}>
                <div className="logo" style={{ display: 'flex' }}>
                    <img src="data.png" width='70px' height='70px' />
                    <h3 style={{ marginTop: '23px' }}>DATA CONVERTER</h3>
                </div>
                <div className="list">
                    <ul>
                        <li ><a href="/home">Home</a></li>
                        <li><a href="/Mytempletes">My Templetes</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="Contactus">Contact Us</a></li>
                        
                        <Button style={{backgroundColor:'black',color:'white',border:'none'}} onClick={() => setModalShow(true)}>
                        <Icon icon="gg:profile" style={{ width: '90px', fontSize: '50px', marginTop: '20px' }} />
                        </Button>

                        <Profilepopup
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </ul>
                </div>

            </nav>

            {/* <Templetes/> */}
            {/* <div style={{ display: 'flex' }}>
                <div className="d-grid gap-2">
                    <Button onClick={() => setLgShow(true)} style={{ width: '683px', backgroundColor: '#12B5B0' }}>Input</Button>
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                </div>
                <div>
                    <Button onClick={() => setLgShow(true)} style={{ width: '683px', backgroundColor: '#fff', color: '#12B5B0' }}>Output</Button>
                </div>
            </div> */}

        </>
    )
}

export default Navbar