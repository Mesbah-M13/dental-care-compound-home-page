import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { UserAuth } from "../../../Context/AuthContext";
// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
// import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/dashboard/appointment')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  return (
    <section className="login-form">
      <div className="login-page container m-5">
        <div className="row align-items-center" style={{ height: "80vh" }}>
          <div className="col-md-6 shadow p-5">
            <h5 className="text-center mb-4 ">Login</h5>

            <span className="d-flex flex-row m-3 mb-4">
              Don't have an account yet?
              <Link to="/signup" className="underline">
                Sign up.
              </Link>
            </span>

            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <label htmlFor="">Email</label>
                <input
                  type={"email"}
                  className="form-control mb-2"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type={"password"}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              {/* <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button> */}
              <button className="btn btn-brand" >
                Log in
              </button>
            </div>
            </form>

          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            {/* <img className="img-fluid" src={LoginBg} alt="" /> */}
            <img className="img-fluid" src alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
