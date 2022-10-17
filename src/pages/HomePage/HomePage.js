import React from "react";
import Header from "./Header";
import Joke from "./Joke";
import Button from "./Button";
import Nav from "./Nav";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Joke />
      <Button />
      <Footer />
    </div>
  );
};

export default HomePage;
