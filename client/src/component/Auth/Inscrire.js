import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";
import { Route, Routes, Navigate } from "react-router-dom";

const Inscrire = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    <Route exact path="/">
      {Inscrire ? <Navigate to="/Login" /> : <Login />}
    </Route>;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        { prenom, nom, pseudo, email, password },
        config
      );
      window.location= '/Connexion'

      console.log(data);
      setErrorMessage("");
      setSuccessMessage("Successfully Registered !");
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setErrorMessage("User Already Exists!");
      setSuccessMessage("");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h1>S'inscrire</h1>
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <span style={{ color: "red", fontWeight: 600, fontSize: 25 }}>
                  {errorMessage}
                </span>
              )}
              {successMessage && (
                <span style={{ color: "green", fontWeight: 600, fontSize: 25 }}>
                  {successMessage}
                </span>
              )}
              <div className="mb-3">
                <label htmlFor="Prenom" className="form-label">
                  Prenom
                </label>
                <input
                  name="Prenom"
                  type="text"
                  required
                  className="form-control"
                  id="Prenom"
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Nom" className="form-label">
                  Nom
                </label>
                <input
                  name="Nom"
                  type="text"
                  required
                  className="form-control"
                  id="Nom"
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Pseudo" className="form-label">
                  Pseudo
                </label>
                <input
                  name="Pseudo"
                  type="text"
                  required
                  className="form-control"
                  id="Pseudo"
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  name="Email"
                  type="text"
                  required
                  className="form-control"
                  id="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mb-3">
                  <label htmlFor="Telephone" className="form-label">
                    Telephone
                  </label>
                  <input
                    name="Telephone"
                    type="text"
                    className="form-control"
                    id="Telephone"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Mot de Passe
                </label>
                <input
                  name="Password"
                  type="password"
                  required
                  className="form-control"
                  placeholder="***********"
                  id="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Cpassword" className="form-label">
                  Confirmer Mot de Passe
                </label>
                <input
                  name="Cpassword"
                  placeholder="***********"
                  type="password"
                  className="form-control"
                  id="Cpassword"
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inscrire;
