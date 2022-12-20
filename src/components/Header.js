import React, { useState } from "react";
import {ImBooks} from "react-icons/im"
import Searchbar from "./Searchbar";
import headerImg from "../images/header.png";
import logo from "../images/logo.jpg";

const Header = ({ inputValue, setInputValue }) => {
  return (
    <main className="w-full">
      <header>
        <div className="py-3 lg:py-4 flex justify-between items-center w-full bg-[#132841]">
        <div className="px-2 py-1 mx-1 flex items-center gap-1 rounded-lg">
        <span className="inline-block text-white bounce"><ImBooks size={28}/></span>
        <p className="px-1 inline-flex text-white cursor-pointer tracking-widest">PanDictionary</p> 
        </div>
      <ul className="hidden md:flex px-2 mx-2 text-white cursor-pointer gap-3">
      <li className="navbar"><a href="#">Home</a></li>
			<li className="navbar"><a href="#">Learn</a></li>
			<li className="navbar"><a href="#">Resources</a></li>
			<li className="navbar"><a href="#">Library</a></li>
			<li className="navbar"><a href="#">Newsletter</a></li>
			<li className="navbar"><a href="#">Contact us</a></li>
		</ul> 
        </div>
        <section className="absolute w-full h-52 xl:h-56 bg-slate-800/90 ">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={headerImg}
            alt="supportImg"
          />
        </section>
        <section className="w-full relative flex justify-center items-center py-8">
          <Searchbar inputValue={inputValue} setInputValue={setInputValue} />
        </section>
      </header>
    </main>
  );
};

export default Header;
