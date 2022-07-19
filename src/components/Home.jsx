import React from "react";
import { Link } from "react-router-dom";

//Assets
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
//Components
import Text from "./Text/TextP";

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers" className="preventClickColor">
        <img src={beers} alt="Beers" />
        <h1>All beers</h1>
      </Link>
      <Text />
      <Link to="/beer/random-beer" className="preventClickColor">
        <img src={randomBeer} alt="New beer" />
        <h1>Random beer</h1>
      </Link>
      <Text />
      <Link to="/new-beer" className="preventClickColor">
        <img src={newBeer} alt="Random beer" />
        <h1>New beer</h1>
      </Link>
      <Text />
    </div>
  );
};

export default Home;