import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import axios from "axios";

const Admin = () => {
  return (
    <div>
      <h1>Enter Product Here</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Item number</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter item number here" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter price here" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Quantity</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter quantity here" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Description</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter description here" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Category</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter category here" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Image</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter iamge url link here" />
        </div>
      </form>
    </div>
  );
}

export default Admin;
