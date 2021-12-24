import './App.css';

function NavBar(props) {

   function handleClick(clickedOn){

    props.handleClick(clickedOn)

   
    }

  return (
    
     <div className="navbar">
  <a className={props.navBarKey==='home'?"active":""} href="#" onClick={()=>{handleClick("home")}}> Home</a> 
  <a className={props.navBarKey==='cart'?"active":""} href="#" onClick={()=>{handleClick("cart")}}> Cart</a> 
  <a className={props.navBarKey==='billing'?"active":""} href="#" onClick={()=>{handleClick("billing")}}> Billing</a> 
  <a className={props.navBarKey==='logout'?"active":""}  href="#" onClick={()=>{handleClick("logout")}}>Logout</a>
</div>
   
  );
}

export default NavBar;
