import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Subject</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Parrots" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput4">Description</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Description" />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Contact;
