import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "42px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData.filter((pizza) => !pizza.soldOut);
  const pizzaCount = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza
            //   name={pizza.name}
            //   ingredients={pizza.ingredients}
            //   photoName={pizza.photoName}
            //   price={pizza.price}
            // />
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Fungi"
        ingredients="Tomattao allo and gajar"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 6;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are open");
  // } else {
  //   alert("Sorry we are closed");
  // }

  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}, We are currently open! */}
      {isOpen && (
        <div className="order">
          <p>We are open until {closeHour}:00. Come Visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We are currently open!");
}

function Pizza(props) {
  // console.log(props);
  // return (
  //   <div className="pizza">
  //     <img src={props.photoName} alt={props.name} />
  //     <div>
  //       <h3>{props.name}</h3>
  //       <p>{props.ingredients}</p>
  //       <span>{props.price + 3}</span>
  //     </div>
  //   </div>
  // );
  const pizza = props.pizza;
  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
