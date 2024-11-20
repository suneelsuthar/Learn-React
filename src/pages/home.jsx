import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { PriceCard } from "../components/priceCard";
const Home = () => {
  const [counter, setcounter] = useState(100);
  const navigate = useNavigate();
  const counterPlus = () => {
    setcounter(counter + 1);
  };

  const counterMinus = () => {
    setcounter(counter - 1);
  };

  return (
    <div>
      <Header title="Home Page" />
      <br />
      <br />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <PriceCard data={{ price: "40,000 $D", title: "Total " }} />
          </div>
          <div class="col">
            <PriceCard
              data={{ price: "30,000 $D", title: "Total  Currency" }}
            />
          </div>
          <div class="col">
            <PriceCard data={{ price: "10,000 $D", title: "Total Virtual " }} />
          </div>
          <div class="col">
            <PriceCard
              data={{ price: "550,00 $D", title: "Total  Currency" }}
            />
          </div>
        </div>
      </div>

      <h1 onClick={() => navigate("about")}>go to aobut page</h1>

      <h1> {counter}</h1>

      <button onClick={() => counterPlus()}>+</button>
      <button onClick={() => counterMinus()}>-</button>
    </div>
  );
};

export default Home;

// class Home extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <div>hello world kaslkjfasfj</div>;
//   }
// }

// export default Home
