import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function RestCard({restArray}) {
    console.log(restArray);
    
  return (
    <div>
        <div className="row">
            {
                restArray.map(item=>(
                    <div className="col m-3 my-4">
                       <Link to={`/view/${item.id}`} style={{textDecoration:'none'}}>
                       <Card style={{ width: '18rem', height:'500px' }}>
                        <Card.Img variant="top" src={item.photograph} height={'300px'} />
                        <Card.Body className='text-white'>
                        <Card.Title>{item.name}</Card.Title>
                         <Card.Text>
                            <p>Cuisine Type : {item.cuisine_type}</p>
                            <p>Address : {item.address}</p>
                        </Card.Text>
                         
                         </Card.Body>
                        </Card>
                       </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RestCard