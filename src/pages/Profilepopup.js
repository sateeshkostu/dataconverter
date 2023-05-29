import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Editprofile from "./Editprofile";

const Profilepopup = (props) => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    const click = () => {
        navigate('/Editprofile')
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
            >

                <Modal.Body className="mbody">
                    <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg" width='200px' height='200px' style={{ borderRadius: '100px', marginTop: '50px', marginBottom:'30px' }} />
                    <div style={{ display: 'flex', marginLeft: '60px' }}>
                        <div style={{ marginRight: '170px' }}>
                            <p>vyshnavi baruri</p>
                            <p>user</p>
                        </div>
                        <div>
                            <p>PhoneNumber:987654324</p>
                            <p>Email:vyshnavibaruri@gmail.com</p>
                            <p>password:*********</p>
                        </div>
                    </div>
                    {/* <button style={{ marginLeft: '350px', width: '200px', borderRadius: '10px', backgroundColor: '#12B5B0', marginBottom: '30px' }} onClick={click}>Edit Profile</button> */}
                    <Button variant="primary" 
                    style={{ marginLeft: '350px', width: '200px', borderRadius: '10px', backgroundColor: '#12B5B0', marginBottom: '30px' }}
                    onClick={() => setModalShow(true)}>
                        Edit Profile
                    </Button>
                    <Editprofile
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Profilepopup