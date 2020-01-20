import React from "react";
// import { Link } from "react-router-dom";
interface CardProps {
    data:{
        item:number;
        price: number;
        description:string;
        imageUrl:string;
        id:number;

    }
}
const Card : React.FC<CardProps> = (props) => {
    return(
        <div className="col s6 m6 l3">
        <div className="card">
          <div className="card-image">
            <img alt={props.data.description} src={props.data.imageUrl} />
          </div>
          <div className="card-content">
            <p>Item: {props.data.item}</p>
            <p>${props.data.price}</p>
            <p>Description:{props.data.description}
            
            {/* <span> | </span> */}
            <span>
            {/* <Link to={"/products/" + props.data.id}>
              View More >
            </Link> */}
            </span>
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    )
}
export default Card