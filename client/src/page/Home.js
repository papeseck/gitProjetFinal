import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "../component/styles/Loading.css";
import Loading from "../component/cart/Loading";
import Produit from "../component/Produit";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await axios.get("http://localhost:5000/product/all-produit");
      setProducts(data.data.products);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="d-flex flex-column mb-3">
      <Header />
      <main className="my-8">
        <Container>
          
            <h1 className="badge bg-primary text-wrap my-2 title" style={{ color: "red" , fontSize:'30px'}}>NOS PRODUITS</h1>
          
          <Row>
            {products.map((item, index) => (
              <>
                <Col key={index} sm={12} md={6} lg={4} className="mt-5">
                  <Produit p={item} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
