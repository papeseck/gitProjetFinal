import React from 'react'
import {Container , Row ,Col} from 'react-bootstrap';

function Footer() {
  return (
    <footer>
        <Container fluid className='bg-primary  text-white' variant='dark' style={{marginBottom:"auto"}}>
            <Row>
                <Col className='text-center py-3'>
                All rights reserved to AVIC SHOP
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer