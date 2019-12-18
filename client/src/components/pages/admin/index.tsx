import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import axios from "axios";
interface MyProps { }
interface MyState {
  inventory: any[],
  item: string,
  category: string,
  price: string,
  description: string,
  quantity: string,
  imageUrl: string
}

export default class Admin extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      inventory: [],
      item: "",
      category: "",
      price: "",
      description: "",
      quantity: "",
      imageUrl: ""
    };
  }
  handleItemChange = (event:any) => {
    this.setState({ item: event.target.value });
  }
  handleCategoryChange = (event:any) => {
    this.setState({ category: event.target.value });
  }
  handlePriceChange = (event:any) => {
    this.setState({ price: event.target.value });
  }
  handleDescriptionChange = (event:any) => {
    this.setState({ description: event.target.value });
  }
  handleQuantityChange = (event:any) => {
    this.setState({ quantity: event.target.value });
  }
  handleImageUrlChange = (event:any) => {
    this.setState({ imageUrl: event.target.value });
  }
  
  handleSubmit = (event:any) => {
    event.preventDefault();

    const product = {
      item: this.state.item,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      imageUrl: this.state.imageUrl
    };

    axios.post(`http://localhost:3000/api/posts`, { product })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
  return (

    <div>
      <h1>Enter Product Here</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Item number</label>
          <input type="text" name="item" onChange={this.handleItemChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input type="text" name="price" onChange={this.handlePriceChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Quantity</label>
          <input type="text" name="quantity" onChange={this.handleQuantityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Description</label>
          <input type="text" name="description" onChange={this.handleDescriptionChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Category</label>
          <input type="text" name="category" onChange={this.handleCategoryChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Image Link</label>
          <input type="text" name="imageUrl" onChange={this.handleImageUrlChange} />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
}