import React,{useState , useEffect} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import Table from "react-bootstrap/Table"

const AllProduit = () => {
    const [products , setProducts] = useState ([]);

    const fetchData= async () => {
       const  result= await axios.get("http://localhost:5000/product/all-produit")
        //console.log(result)
        setProducts(result.data.data);
       //console.log(products)
    };
    

    //deleted Product  
    const deleteProductData = async(id) => {
        axios.delete(`http://localhost:5000/product/delete/${id}`);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);
   

  return (
    <>
         <React.Fragment >
                <Table  bordered   expand="lg" variant="dark" bg="primary">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Poids</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                           
                            <tr key={index}>
                                <td>{product.Description}</td>
                                <td>{product.Poids}</td>
                                <td>{product.Prix}</td>
                                <td>{product.Image}</td>
                                <td>{product.Name}</td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-info"
                                        to={`/edit-produit/${product._id}`}
                                    >
                                        editer
                                    </NavLink>
                                </td>
                                
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteProductData(product._id)}
                                        >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </React.Fragment>
            
    </>
  )
}

export default AllProduit