import React from 'react'
import { useDispatch } from 'react-redux';

const Card = ({ item }) => {

  
  const dispatch = useDispatch();
  
  
    return (
      <div class="card mt-3" style={{ width: "250px", height: "380px" }}>
        <img src={item.photo} class="card-img-top" alt="card img" />
        <div class="card-body">
          <h6 class="card-title">{item.name}</h6>
          <div className=" card_price">
            <p className="mb-0">Price : {item.price} TK</p>
            <small>quantity : {item.quantity}</small>
          </div>

          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch({ type: "ADD", value: item })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
}

export default Card
