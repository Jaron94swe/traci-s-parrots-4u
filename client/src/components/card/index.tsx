import React from "react";
import { Link } from "react-router-dom";
import {Container} from "../Grid"

interface CardProps {
    data:{
        item:number;
        price: number;
        description:string;
        image:string;
        id:number;

    }
}
const Card : React.FC<CardProps> = (props) => {
    return(
      <Container fluid>
        <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img alt={props.data.description} src={props.data.image} />
            <span className="card-title product-title">{props.data.item}</span>
          </div>
          <div className="card-content">
            <p>{props.data.item}</p><br/>
            <p>${props.data.price}</p><br/>
            <p>{props.data.description}
             
            <span> | </span>
            <span>
            <Link to={"/products/" + props.data.id}>
              View More >
            </Link></span>
            </p>
          </div>
        </div>
      </div>
      </Container>
    )
}
export default Card