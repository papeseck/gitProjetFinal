import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const EditProduit = () => {
    const [product, setProduct] = useState({
        Description: "",
        Poids: "",
        Prix: "",
        Image: "",
        Name: ""
    });

    const { id } = useParams();
    const { Description, Poids, Prix, Image, Name } = product;

    // recupération du produit
    const fetchData = async (id) => {
        const result = await axios.get(`http://localhost:5000/product/show-produit/${id}`);
        setProduct(result.data.data);
    };
    useEffect(() => {
        fetchData();
    }, []);


    // update
    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/product/update/${id}`, product);

        window.location = "/";
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
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
                                    type="Text"
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
                                    Modifier Produit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>

    )
}
export default EditProduit;