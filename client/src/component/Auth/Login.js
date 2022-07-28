import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUserInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signin",
        { email, password },
        config
      );
      window.location= '/addproduit'

      //console.log(data);
      setErrorMessage("");
      setSuccessMessage("Logged In !");
      localStorage.setItem("user", JSON.stringify(data));
      //setUserInfo(JSON.parse(localStorage.getItem("user")));
    } catch (error) {
      setErrorMessage("Invalid Email or password");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h2>Login to add product</h2>
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
                <label htmlFor="Pseudo" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  required
                  placeholder="email@example.com"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  name="Password"
                  type="password"
                  required
                  placeholder="***********"
                  className="form-control"
                  id="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  S'authentifier
                </button>
              </div>
            </form>
          </div>
        </div>
       <h5> Si vous n'avez pas de compte , il faut <a href=" /inscrire"> S'inscrire</a> </h5> 
      </div>
    </>
  );
};

export default Login;
