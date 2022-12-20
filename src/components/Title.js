import React, { useState, useEffect } from "react";
import { GiSpeaker } from "react-icons/gi";

import useAudio from "../helpers/Hooks/useAudio";

const Title = ({ response }) => {
  const [Phonetics, setPhonetics] = useState([response[0]]);
  //   console.log(response[0].phonetics[0].audio);
  //   console.log(Phonetics.phonetics[0].audio);
  console.log(response);

  const [playing, toggle] = useAudio(response[0].phonetics[0].audio);
  return (
    <main className="text-navy mt-2">
      <div>
        <section className="p-1 flex items-center">
          <p className="text-5xl font-semibold">
            <span>{response[0].word}</span>
          </p>
        </section>
        {Phonetics.map(
          (title) => (
            <div key={title.word} className="p-1 flex justify-center items-center gap-3 ">
              <p className="text-xl font-medium">
                <span>{response[0].meanings[0].partOfSpeech}</span>
              </p>
              <p className="text-2xl font-normal">{title.phonetic}</p>

              {/* <p className="text-2xl font-normal">{title.phonetics[0].audio}</p> */}
              <p>
                {/* {playing && "Play"} */}
                {title.phonetics[0].audio === "" ? null : (
                  <GiSpeaker className="cursor-pointer" size={33} onClick={toggle} />
                )}
              </p>
            </div>
          )
          //   title.phonetics
          //   title.phonetics.map((data) => (
          //     <div key={data.word}>
          //       <p className="text-2xl font-normal">{data.text}</p>
          //       <p>
          //         {playing && "Play"}
          //         <GiSpeaker size={33} onClick={toggle} />{" "}
          //       </p>
          //     </div>
          //   ))
        )}
      </div>
    </main>
  );
};

export default Title;
