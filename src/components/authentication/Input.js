import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Input = () => {

    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            {/* <div className="d-grid gap-2">
                <Button className="button1" style={{ width:'683px', backgroundColor:'#12B5B0'}}>
                    Input
                </Button>
            </div> */}
            <div style={{ flexDirection: 'column' }}>
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
                <h3 style={{textAlign:'center', marginTop:'30px'}}>inputfile definition</h3>
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
            <button style={{width:'150px', height:'40px', borderRadius:'10px', backgroundColor:'#12B5B0', textAlign:'center', marginLeft:'300px', marginTop:'30px'}}>+Add Header</button>
            </div>
        </>
    )
}

export default Input;