import React from "react";
import axios from "axios"
import Card from "../../card";
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
export default class Products extends React.Component<MyProps, MyState> {

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

  componentDidMount() {
    axios.get(`http://localhost:3000/api/products`)
      .then(res => {
        const inventory = res.data;
        this.setState({ inventory });
      })
  }

  render() {
    return (
      
      <div className="row">
        {this.state.inventory.map((inventory, i) =>
          <Card data={inventory} key={i}>{inventory.item},{inventory.price},{inventory.category},{inventory.description}</Card>
        )}
      </div>
    )
  }
}