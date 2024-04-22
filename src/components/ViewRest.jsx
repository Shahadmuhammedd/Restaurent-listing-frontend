import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import RestOp from './RestOp';
import Restreview from './Restreview';

function ViewRest() {
    /// 1. get id from the params
    // const params = useParams()
    // console.log(params);
    // console.log(params.id);
    
    //destructuring:
    const {id} = useParams()
    console.log(id);

      //1 create a base_url
  const base_url = 'http://localhost:3001/restaurants'

  //4 cstate creation for holding particular restaurant detasils
  const[viewRestData,setViewRestData] =useState({})

    //2.0view particular restaurant details 'http://localhost:3001/restaurants'
    const viewRestaurant=async()=>{
        const {data} = await axios.get(`${base_url}/${id}`)
        console.log(data);
        setViewRestData(data)

    }
    console.log(viewRestData);
    useEffect(()=>{
        viewRestaurant()
    })
  return (
    <div>
        <Row>
            <Col>
            {/*image*/}
            <img src={viewRestData.photograph} width={'400px'} alt="" />
            </Col>
           
             <Col className='m-5 text-center'>
                <h1>{viewRestData.name}</h1>
            {/*content*/}
            <ListGroup>
            <ListGroup.Item ></ListGroup.Item>
            <ListGroup.Item>Neighborhood : {viewRestData.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Address : {viewRestData.address}</ListGroup.Item>
            <ListGroup.Item>Cuisine type : {viewRestData.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={viewRestData.operating_hours}/></ListGroup.Item>
            <ListGroup.Item><Restreview reviews={viewRestData.reviews} /></ListGroup.Item>
           
            </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default ViewRest