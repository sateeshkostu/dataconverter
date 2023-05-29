import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Editprofile = (props) => {
    const updatehandler = () => {
        console.log('')
    }
    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="ebody">
                    <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg" width='200px' height='200px' style={{ borderRadius: '100px', marginTop: '100px', marginRight:'80px', marginLeft:'30px' }} />
                    <div style={{ display: 'flex', marginLeft: '80px' }}>
                        <form className="edit">
                            <h5 style={{color:'#12B5B0', marginBottom:'20px', marginTop:'30px'}}>Editprofile</h5>
                            <input /><br/><br/>
                            <input /><br /><br/>
                            <input /><br /><br/>
                            <input /><br /><br/>
                            <a href="">Create New Password</a><br/><br/>
                            <button 
                            style={{ marginLeft: '30px', width: '200px', borderRadius: '10px', backgroundColor: '#12B5B0', marginBottom: '30px' }}
                            onClick={updatehandler}
                            >Update</button>
                        </form>

                    </div>

                </Modal.Body>
            </Modal>


        </>
    )
}

export default Editprofile