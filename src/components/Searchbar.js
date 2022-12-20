import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import GirlImg from "../images/Lib5.jpg";

const Searchbar = ({ inputValue, setInputValue }) => {
  const [searchValue, setSearchValue] = useState("");

  // Sending values
  const handleSearch = () => {
    setInputValue(searchValue);
    setSearchValue("");
  };
  const handleEnterKeySubmit = (e) => {
    if (e.key === "Enter") {
      setInputValue(searchValue);
      setSearchValue("");
    }
  };
  return (
    <main className="flex flex-col gap-6">
      <section className="mx-auto w-full flex justify-center items-center p-1 ">
        <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl text-white font-light animate-pulse tracking-widest">
          Look up a word and learn it forever...
        </p>
      </section>
   <section className="px-4 md:px-12">
   <div className="mx-auto flex w-full overflow-hidden bg-white shadow-lg shadow-black/20 rounded-full ">
        <span className="searchIcon">
          <ImSearch size={23} />
        </span>
        <input
          type="text"
          placeholder="Start typing to look up a word..."
          className={` searchInput ${searchValue === "" && "animate-pulse"}`}
          value={searchValue}
          onKeyDown={handleEnterKeySubmit}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {searchValue !== "" && (
          <span className="closeField " onClick={() => setSearchValue("")}>
            <GrClose size={15} />
          </span>
        )}
        {/* Close Icon */}

        {/* // Search button */}
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
   </section>

      {/* <p className="mt-6 text-center text-green-700">
        Search keyword : {searchValue}
      </p> */}
    </main>
  );
};

export default Searchbar;
