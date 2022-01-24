import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { userInfo } from "../../utils/auth";
import CreateCatagory from "./CreateCatagory";
// import CreateProduct from "./CreateProduct";
import ProductCreate from "./ProductCreate";
import AllProduct from "./AllProduct";

const AdminDashbord = () => {
  const [allProductToggleBtn,setAllProductToggleBtn] = useState(false)
  const { name, email, role } = userInfo();
  console.log(allProductToggleBtn);
  return (
    <>
      <Layout title="Admin dashbord">
        <Navbar></Navbar>
        <div className="row mt-3">
          <div className="col-md-3">
            <ul class="list-group">
              <li class="list-group-item active">Menu</li>
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ width: "150px" }}
                >
                  Create Catagory
                </button>
                <CreateCatagory></CreateCatagory>
              </li>
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#ProductCreate"
                  style={{ width: "150px" }}
                >
                  Create Product
                </button>
                {/* <CreateProduct></CreateProduct> */}
                <ProductCreate></ProductCreate>
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "150px" }}
                  onClick={() => setAllProductToggleBtn(!allProductToggleBtn)}
                >
                  All Product
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-6 offset-md-1">
            <ul class="list-group">
              <li class="list-group-item active">User Information</li>
              <li class="list-group-item">Name : {name} </li>
              <li class="list-group-item">Email : {email}</li>
              <li class="list-group-item">Role : {role} </li>
            </ul>
          </div>

          <div className="col-12 col-md-8 offset-md-2">
            {allProductToggleBtn && <AllProduct></AllProduct>}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashbord;
