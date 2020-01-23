import React from "react";
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
  handleCategoryChange = (event: any) => {
    this.setState({ category: event.target.value });
  }
  handlePriceChange = (event: any) => {
    this.setState({ price: event.target.value });
  }
  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value });
  }
  handleQuantityChange = (event: any) => {
    this.setState({ quantity: event.target.value });
  }
  handleImageUrlChange = (event: any) => {
    this.setState({ imageUrl: event.target.value });
  }

  handleSubmit = (event: any) => {
    event.preventDefault();

    const product = {
      item: this.state.item,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      imageUrl: this.state.imageUrl
    };

    axios.post(`https://whispering-shore-84512.herokuapp.com/api/posts`, product)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (

      <div>
        <h1>Enter Product Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label >Item number:
          <input type="text" name="item" onChange={this.handleItemChange} />
            </label>
          </div>

          <div>
            <label >Price:
          <input type="text" name="price" onChange={this.handlePriceChange} />
            </label>
          </div>

          <div>
            <label >Quantity:
          <input type="text" name="quantity" onChange={this.handleQuantityChange} />
            </label>
          </div>

          <div>
            <label >Description:
          <input type="text" name="description" onChange={this.handleDescriptionChange} />
            </label>
          </div>

          <div>
            <label >Category:
          <input type="text" name="category" onChange={this.handleCategoryChange} />
            </label>
          </div>

          <div>
            <label >Image Link:
          <input type="text" name="imageUrl" onChange={this.handleImageUrlChange} />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}