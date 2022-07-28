import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Image,
  Listgroup,
  Card,
  Button,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const DetailsProduit = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  //recuperation d'un produit
  const fetchData = async () => {
    const result = await axios.get(
        `http://localhost:5000/product/all-produit/${id}`
    );
    setProduct(result.data.product);
    console.log(product)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Link to="/" btn btn-light my-3>
        {" "}
        <i className="fa-solid fa-chevron-left"></i>Retour
      </Link>
      <Row>
        <Col>
            {product.find(id)}
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsProduit;
