import React from "react";
import CardImg1 from "../images/sketch 2.png";
import CardImg2 from "../images/sketch 6.png";
import CardImg3 from "../images/sketch 3.png";
import CardImg4 from "../images/lib 3.png";
// import blueImg from "../images/blue bg.jpg";
// import GirlImg from "../images/Lib5.jpg";
import BookImg from "../images/book.jpg";
import spinImg from "../images/sketch 8.png";

const Cards = () => {
  return (
    // <main className="bg-[url('../images/blue bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
    <main className="mt-8">
        <section className="text-center">
            {/* <img src={blueImg} alt="blueimg" /> */}
            {/* <img src={spinImg} className="animate-spin w-32" alt="" /> */}
            <p className="heading inline-flex">
          Make your Words Meaningful! 
          </p>
        </section>
      <section className="max-w-[1240px] xl:max-w-[1440px] mx-auto py-7 w-full grid sm:grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="cards cardsHover">
          <div className="cardsTitle"><p className="">Finally a dictionary with a soul</p></div>
          <div><img src={CardImg1} className="w-full h-40 duration-1000 bounce" alt="CardImg1" /></div>
          <div className="cardsPara"><p>
            Our definitions were written by humans, for humans. Each word has a
            friendly explanation that makes it easy to remember.
          </p></div>
        </div>
        <div className="cards cardsHover">
          <div className="cardsTitle"><p className="">Real world English Examples</p></div>
          <div><img src={CardImg2} className="w-full h-40 duration-1000 bounce" alt="" /></div>
          <div className="cardsPara"><p>
          Discover thousands of example sentences from current newspapers, magazines, and literature.
          </p></div>
        </div>
        <div className="cards cardsHover">
          <div className="cardsTitle"><p className="">World’s smartest, fastest dictionary</p></div>
          <div><img src={CardImg3} className="w-full h-40 duration-1000 bounce" alt="" /></div>
          <div className="cardsPara"><p>
          Find the word you’re looking for faster than any other online dictionary. That’s less time searching, more time learning.
          </p></div>
        </div>
        <div className="cards cardsHover">
          <div className="cardsTitle"><p className="">Strategic studying to maximize your learning.</p></div>
          <div><img src={CardImg4} className="w-full h-40 duration-1000 bounce" alt="" /></div>
          <div className="cardsPara"><p>
          Focus on the words that are most crucial for success.Get answers to the questions that teachers ask about English grammar and vocabulary
          </p></div>
        </div>
      </section>
    </main>
  );
};

export default Cards;
