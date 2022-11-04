import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../Context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate('/dashboard/appointment')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (

    <section className="signup-form">
      <div className="login-page container m-5">
        <div className="row align-items-center" style={{ height: "80vh" }}>
          <div className="col-md-6 shadow p-5">
            <h5 className="text-center mb-4 ">Sign up</h5>

            <span className="d-flex flex-row m-3 mb-4">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in.
              </Link>
            </span>

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example3c">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="form3Example3c"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example4c">
                    Password
                  </label>

                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="form3Example4c"
                    className="form-control"
                  />
                </div>
              </div>
              {/* 
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" for="form3Example4cd">
                  Repeat your password
                </label>
                <input
                  type="password"
                  id="form3Example4cd"
                  className="form-control"
                />
              </div>
            </div> */}
              <div className="from-group m-3">
                {/* <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button> */}
                <button className="btn btn-brand">
                  {/* Google Sign in */}
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
