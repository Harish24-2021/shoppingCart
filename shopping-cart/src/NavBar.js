import './App.css';

function NavBar({ handleClick, navBarKey }) {
  return (
    <div className="navbar">
      <a 
        className={navBarKey === 'home' ? "active" : ""}
        onClick={() => handleClick("home")}
      > 
        Home
      </a> 

      <a 
        className={navBarKey === 'cart' ? "active" : ""}
        onClick={() => handleClick("cart")}
      > 
        Cart
      </a> 

      <a 
        className={navBarKey === 'billing' ? "active" : ""}
        onClick={() => handleClick("billing")}
      > 
        Billing
      </a> 

      <a 
        className={navBarKey === 'addproducts' ? "active" : ""}
        onClick={() => handleClick("addproducts")}
      > 
        Add Products
      </a>
    </div>
  );
}

export default NavBar;
