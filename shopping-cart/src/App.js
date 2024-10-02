import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";
import Banana from "./Images/Banana.png";
import Mango from "./Images/Mango.jpg";
import Apple from "./Images/Apple.jpg";
import brinjal from "./Images/brinjal.jpg";
import coconutOil from "./Images/coconutOil.jpg";
import drumstick from "./Images/drumstick.png";
import FormalShirt from "./Images/FormalShirt.jpg";
import mazza from "./Images/mazza.jpg";
import oranges from "./Images/oranges.jpg";
import ponds from "./Images/ponds.jpg";
import potatoes from "./Images/potatoes.jpg";
import rosewater from "./Images/rosewater.jpg";
import sunscreen from "./Images/suncreen.jpg";
import Teeshirt from "./Images/Teeshirt.jpg";
import Thumpsup from "./Images/Thumpsup.png";
import tie from "./Images/tie.jpg";
import Tomato from "./Images/Tomato.jpg";
import Billing from "./Billing";
import AddProducts from "./Business/Components/AddProducts";

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      navBarKey: "home",
      productList: [
        {
          id: 1,
          name: "Mango",
          Price: 30,
          quantityAvailable: 12,
          category: "Fruits",
          image: Mango,
          quantity: 0,
        },
        {
          id: 2,
          name: "Apple",
          Price: 50,
          quantityAvailable: 20,
          category: "Fruits",
          image: Apple,
          quantity: 0,
        },
        {
          id: 3,
          name: "Banana",
          Price: 10,
          quantityAvailable: 100,
          category: "Fruits",
          image: Banana,
          quantity: 0,
        },
        {
          id: 4,
          name: "Orange",
          Price: 25,
          quantityAvailable: 25,
          category: "Fruits",
          image: oranges,
          quantity: 0,
        },
        {
          id: 5,
          name: "Pond's Powder",
          Price: 130,
          quantityAvailable: 12,
          category: "Cosmetics",
          image: ponds,
          quantity: 0,
        },
        {
          id: 6,
          name: "VLCC Sun Screen",
          Price: 200,
          quantityAvailable: 12,
          category: "Cosmetics",
          image: sunscreen,
          quantity: 0,
        },
        {
          id: 7,
          name: "Coconut oil",
          Price: 80,
          quantityAvailable: 12,
          category: "Cosmetics",
          image: coconutOil,
          quantity: 0,
        },
        {
          id: 8,
          name: "Rose Water",
          Price: 40,
          quantityAvailable: 12,
          category: "Cosmetics",
          image: rosewater,
          quantity: 0,
        },
        {
          id: 9,
          name: "Tomatoes",
          Price: 30,
          quantityAvailable: 12,
          category: "Vegetables",
          image: Tomato,
          quantity: 0,
        },
        {
          id: 10,
          name: "Brinjal",
          Price: 30,
          quantityAvailable: 12,
          category: "Vegetables",
          image: brinjal,
          quantity: 0,
        },
        {
          id: 11,
          name: "Drum Stick",
          Price: 10,
          quantityAvailable: 12,
          category: "Vegetables",
          image: drumstick,
          quantity: 0,
        },
        {
          id: 12,
          name: "Potatoes",
          Price: 30,
          quantityAvailable: 12,
          category: "Vegetables",
          image: potatoes,
          quantity: 0,
        },
        {
          id: 13,
          name: "T-shirt",
          Price: 500,
          quantityAvailable: 12,
          category: "Clothing",
          image: Teeshirt,
          quantity: 0,
        },
        {
          id: 14,
          name: "Formal Shirt",
          Price: 30,
          quantityAvailable: 12,
          category: "Clothing",
          image: FormalShirt,
          quantity: 0,
        },
        {
          id: 15,
          name: "Tie",
          Price: 100,
          quantityAvailable: 12,
          category: "Clothing",
          image: tie,
          quantity: 0,
        },
        {
          id: 16,
          name: "Thumbs Up",
          Price: 80,
          quantityAvailable: 12,
          category: "Bevarages",
          image: Thumpsup,
          quantity: 0,
        },
        {
          id: 17,
          name: "Mazza",
          Price: 110,
          quantityAvailable: 12,
          category: "Bevarages",
          image: mazza,
          quantity: 0,
        },
      ],
    };
  }

  handleClick = (index) => {
    this.setState({ navBarKey: index });
    if (index === "logout") {
      window.location.reload();
    }
  };

  updateQuantity = (id, quantity) => {
    let productList = this.state.productList;

    for (let key in productList) {
      if (productList[key]["id"] === id) {
        productList[key]["quantity"] = quantity;
        this.setState({ productList: productList });
        break;
      }
    }
  };

  handleCheckout = () => {
    this.setState({ navBarKey: "billing" });
  };
  handlePlaceOrder = () => {
    alert("Order placed..Thank you for shopping");
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <NavBar
          handleClick={this.handleClick}
          navBarKey={this.state.navBarKey}
        />
        {this.state.navBarKey === "home"
          ? Object.keys(this.state.productList).map((key) => {
              return (
                <Product
                  key={key}
                  index={key}
                  productDetails={this.state.productList[key]}
                  updateQuantity={this.updateQuantity}
                />
              );
            })
          : null}

        {this.state.navBarKey === "cart" ? (
          <div>
            <button className="checkoutButton" onClick={this.handleCheckout}>
              Checkout{" "}
            </button>
          </div>
        ) : null}

        {this.state.navBarKey === "cart"
          ? Object.keys(this.state.productList).map((key) => {
              if (this.state.productList[key]["quantity"] !== 0) {
                return (
                  <Cart
                    key={key}
                    index={key}
                    productDetails={this.state.productList[key]}
                  />
                );
              }
              return [];
            })
          : null}

        {this.state.navBarKey === "billing" ? (
          <Billing
            handlePlaceOrder={this.handlePlaceOrder}
            productList={this.state.productList}
          />
        ) : null}

        {this.state.navBarKey === "addproducts" ? <AddProducts /> : null}
      </div>
    );
  }
}
