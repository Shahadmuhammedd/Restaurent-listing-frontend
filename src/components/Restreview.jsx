import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function Restreview({ reviews }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant='dark' onClick={handleShow}>Reviews</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>View User Experience</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {reviews?.map((item, index) => (
                        <ListGroup className='my-3' key={index}>
                            <ListGroup.Item>{item.name}</ListGroup.Item>
                            <ListGroup.Item>{item.date}</ListGroup.Item>
                            <ListGroup.Item>{item.rating}</ListGroup.Item>
                            <ListGroup.Item>{item.comments}</ListGroup.Item>
                        </ListGroup>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Restreview;