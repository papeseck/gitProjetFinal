import React,{useState} from 'react';
import axios from "axios";
import HeaderAdmin from "./Auth/HeaderAdmin"

const AddProduit = () => {
     const [produit , setProduit]= useState({
        Description: "",
        Poids : "" ,
        Prix : "" ,
        Image : "",
        Name : ""
     });
const {Description, Poids , Prix , Image , Name} = produit;
const onInputChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/product/create", produit);
    console.log(produit)

    window.location = "/" ;
  };
  return (
    <>
    <HeaderAdmin/>
    <div className="container mt-5">
        <div className="row">
          <h3 style={{textAlign:"center"}}> Add product</h3>
          <div className="col-md-8 offset-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <input
                  value={Description}
                  name="Description"
                  type="text"
                  className="form-control"
                  id="Description"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Poids" className="form-label">
                  Poids
                </label>
                <input
                  value={Poids}
                  name="Poids"
                  type="text"
                  className="form-control"
                  id="Poids"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="Prix" className="form-label">
                  Prix
                </label>
                <input
                  value={Prix}
                  name="Prix"
                  type="text"
                  className="form-control"
                  id="Prix"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Image" className="form-label">
                  Image
                </label>
                <input
                  value={Image}
                  name="Image"
                  type="text"
                  className="form-control"
                  id="Image"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  value={Name}
                  name="Name"
                  type="text"
                  className="form-control"
                  id="Name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Ajouter un produit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddProduit