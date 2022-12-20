import React, { useEffect, useState } from "react";

const useAudio = (url) => {
  //   let url;
//   const [url, setUrl] = useState("");
//   if (phoneticsURLArray[0].audio !== "") {
//     setUrl(phoneticsURLArray[0].audio);
//   } else {
//     setUrl(phoneticsURLArray[1].audio);
//   }

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

//   console.log(phoneticsURLArray[0].audio);

  const toggle = () => {
    setPlaying(true);
    audio.play();
    // audio.pause();
  };

  //   useEffect(() => {
  //     // playing ? audio.play() : audio.pause();

  //     playing && audio.play();
  //     // setPlaying(true);
  //   }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false);
      audio.pause();
    });
    return () => {
      audio.removeEventListener("ended", () => {
        setPlaying(false);
        audio.pause();
      });
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
