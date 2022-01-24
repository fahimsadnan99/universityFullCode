import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import {useHistory} from "react-router-dom"
import "./SignInUp.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Login } from '../../API/AllApi';
import {authenticate} from "../../utils/auth"
import { loadingStatus, successMsg, ErrorMsg } from "../../utils/message";
const Signin = () => {
  const [massageShow, setMassageShow] = useState({
    disabled: false,
    loading: false,
    success: false,
    error : false,
  })

const history =   useHistory()
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
     setMassageShow({
       disabled: true,
       loading: true,
       success: false,
       error: false,
     });

  Login(e)
    .then(res => {
      authenticate(res.data.Token, () => {
        setMassageShow({
          disabled: true,
          loading: false,
          success: true,
          error: false,
        });
        successMsg(true, res.data.message)
        history.replace("/")
      });
    })
    .catch(err => {
      
       setMassageShow({
         disabled: false,
         loading: false,
         success: false,
         error: true,
       });
      ErrorMsg(true,"User Information Invalid")
   })
  reset();
};

    return (
      <Layout title="Signin Page">
        <Navbar></Navbar>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
              <div className="card signup_Wrapper p-3 my-5">
                <h4 className="text-center mb-2">Signin</h4>
                <Link to="/signup" className="text-center">
                  Create An Account?
                </Link>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  
                  style={{ textTransform: "capitalize" }}
                >
                  {loadingStatus(massageShow.loading)}
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
                    <small style={{ color: "red" }}>
                      {errors.email.message}
                    </small>
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

                  <br></br>
                  <div className="text-center">
                    <button
                      className="btn btn-outline-danger text-center"
                      disabled={massageShow.disabled}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default Signin
