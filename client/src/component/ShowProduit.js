import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "./Header";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "./redux/reducers/cart";
import Loading from "./cart/Loading";

function ShowProduit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //recuperation d'un produit
  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/product/show-produit/${id}`
    );
    //console.log(result);
    setProduct(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main className="my-8 product">
        <Container>
          <h3> Details Produits</h3>
          <div className="container flex justify-content-center my-16">
            <Link to="/" btn btn-light my-3>
              {" "}
              <i class="fa-solid fa-chevron-left"></i>Retour
            </Link>
            <Card
              border="primary"
              className="my-1 p-1 rounded"
              style={{ width: "18rem", justifyContent: "center" }}
            >
              <Card.Img src={product.Image} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title
                  as="div"
                  className="text-center text-black"
                  style={{ fontSize: "25px", fontFamily: "inherit" }}
                >
                  <strong>{product.Name}</strong>
                </Card.Title>
                <Card.Text
                  as="h3"
                  className="text-center text-black"
                  style={{ fontSize: "15px", fontFamily: "inherit" }}
                >
                  <span> {product.Description}</span>
                </Card.Text>
                <Card.Text
                  as="h3"
                  className="text-center text-black"
                  style={{ fontSize: "15px", fontFamily: "inherit" }}
                  v
                >
                  <span> {product.Prix}FCFA</span>
                </Card.Text>
                <Card.Text
                  as="h3"
                  className="text-center text-black"
                  style={{ fontSize: "15px", fontFamily: "inherit" }}
                  v
                >
                  <span> {product.Poids}</span>
                </Card.Text>
              </Card.Body>
              <Button onClick={() => dispatch(addToCart(product))}>
                {" "}
                <i className="fa-solid fa-cart-shopping"></i> Ajouter au panier
              </Button>
            </Card>
          </div>
        </Container>
      </main>
    </>
  );
}

export default ShowProduit;
