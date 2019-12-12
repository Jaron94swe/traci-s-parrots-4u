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
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Subject</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Parrots" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Contact;
