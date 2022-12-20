import React, { useState } from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <main className=" bg-[#F0F2F1] ">
      <section className="">
        <Header inputValue={inputValue} setInputValue={setInputValue} />
      </section>
      <section className="">
        <SearchResults inputValue={inputValue} />
        <Cards />
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  );
};

export default Home;
