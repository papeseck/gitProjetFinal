import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { addToCart } from './redux/reducers/cart';
import {useDispatch} from "react-redux";


const Produit = ({p}) => {
  const dispatch=useDispatch()

  return (
    <>
    <Card className='my-1 p-1 rounded' >
      <a href={`http://localhost:3000/product/show-produit/${p._id}`}>
        <Card.Img src={p.Image} style={{height:'200px' } }/>
      </a>

    
    <Card.Body>
            <a href={`http://localhost:3000/product/show-produit/${p._id}`}  style={{textDecoration:'none'}}>
              <Card.Title as='div' className='text-center text-black' style={{fontSize:'25px' , fontFamily: 'inherit'}}>
                <strong>{p.Name}</strong>
              </Card.Title>
            </a>
            
            <Card.Text as='h3' className='text-center text-black' style={{fontSize:'15px' , fontFamily: 'inherit'}}v>
              <span> {p.Prix}FCFA</span>

            </Card.Text>
    </Card.Body>
            <Button  onClick={() => dispatch(addToCart(p))}><i className="fa-solid fa-cart-shopping"  ></i> ajouter au Panier</Button>
    </Card>
    </>
  )
}


export default Produit