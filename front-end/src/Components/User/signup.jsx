import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import "./SignInUp.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {loadingStatus,successMsg,ErrorMsg} from "../../utils/message"

// import { loadingStatus, successMsg } from "../../utils/message"
import { Registration } from "../../API/AllApi";

const Signup = () => {
  const [values, setValues] = useState({
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (e) => {
    console.log(e);
    setValues({ ...values, loading: true, disabled: true });
    Registration(e)
      .then((res) => {
       setValues({ ...values, loading: true, disabled: true,success : true });
        successMsg(true,res.data.message)
        history.replace("/signin");
      })
      .catch(errors => {
         setValues({ ...values, loading: false, disabled: false })
        ErrorMsg(errors, "Already Registered This Email");
      });

    reset();
  };

  return (
    <Layout title="Signin Page">
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="card signup_Wrapper p-3 my-5">
              <h4 className="text-center mb-2">Signup</h4>
              <Link to="/signin" className="text-center">
                Already Have An Account?
              </Link>
              <div>
                {loadingStatus(values.loading)}
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ textTransform: "capitalize" }}
              >
                <div className="input_field_div">
                  <input
                    type="name"
                    className="form-control input_field my-2"
                    {...register("name", {
                      required: "Name is Require",
                      minLength: {
                        value: 4,
                        message: "Name mustbe 4 carecter",
                      },
                    })}
                    placeholder="Enter Your Name"
                  ></input>
                </div>
                {errors.name && (
                  <small style={{ color: "red" }}>{errors.name.message}</small>
                )}

                <div className="input_field_div">
                  <input
                    type="email"
                    className="form-control input_field my-2"
                    {...register("email", {
                      required: "Email is Require",
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid Email Address",
                      },
                    })}
                    placeholder="Enter Your Eamil"
                  ></input>
                </div>
                {errors.email && (
                  <small style={{ color: "red" }}>{errors.email.message}</small>
                )}

                <div className="input_field_div">
                  <input
                    type="password"
                    className="form-control input_field my-2"
                    {...register("password", {
                      required: "Password is Require",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    placeholder="Enter Your password"
                  ></input>
                </div>
                {errors.password && (
                  <small style={{ color: "red" }}>
                    {errors.password.message}
                  </small>
                )}

                <div className="input_field_div">
                  <input
                    type="password"
                    className="form-control input_field my-2"
                    {...register("cpassword", {
                      required: "Password Not Match",
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                    placeholder="Confirm Password"
                  ></input>
                </div>
                {errors.cpassword && (
                  <small style={{ color: "red" }}>
                    {errors.cpassword.message}
                  </small>
                )}

                <br></br>
                <div className="text-center">
                  <button className="btn btn-outline-danger text-center">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
