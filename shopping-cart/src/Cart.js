import './App.css';
let Cart= (props) =>{


  return (
    <div className='product-details'>
    <div className="card">
  <img className='product-img' src={props.productDetails.image} alt="" />
  <div className="container">
    <h4><b>{props.productDetails.name}</b></h4> 
    <p>Price Rs: {props.productDetails.Price}/Piece</p> 
    <p>Quantity Added: {props.productDetails.quantity}</p> 
    <p>Cost : {props.productDetails.quantity*props.productDetails.Price}</p> 
  </div>
  </div>
  </div>
  );
}

export default Cart;
