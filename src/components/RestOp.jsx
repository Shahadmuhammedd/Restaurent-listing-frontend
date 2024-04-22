import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function RestOp({op}) {
    console.log(op);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
  <Button variant='dark' onClick={handleShow}>View Operating Hours</Button>
      
      <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>view Operating Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>Monday : {op?. Monday}</ListGroup.Item>
      <ListGroup.Item as="li">Tuesday : {op?. Tuesday}</ListGroup.Item>
      <ListGroup.Item as="li" active>Wednesday : {op?. Wednesday}</ListGroup.Item>
      <ListGroup.Item as="li">Thursday : {op?. Thursday}</ListGroup.Item>
      <ListGroup.Item as="li" active>Friday : {op?. Friday}</ListGroup.Item>
      <ListGroup.Item as="li">Saturday : {op?. Saturday}</ListGroup.Item>
      <ListGroup.Item as="li" active>Sunday : {op?. Sunday}</ListGroup.Item>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>Understood</Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default RestOp