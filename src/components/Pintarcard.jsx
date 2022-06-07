import React from 'react'
import { Card } from 'react-bootstrap'

const Pintarcard = ({ name, image }) => {
   return (
      <>
         <Card className='m-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
            </Card.Body>
         </Card>
      </>
   )
}

export default Pintarcard