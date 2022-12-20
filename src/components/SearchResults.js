import axios from "axios";
import React, { useEffect, useState } from "react";
import Meanings from "./Meanings";
import Example from "./Example";
import Title from "./Title";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";

const allAPI = "https://wordsapiv1.p.mashape.com/words/";
const soundAPI = "https://api.dictionaryapi.dev/api/v2/entries/en";

axios.defaults.baseURL = soundAPI;

const SearchResults = ({ inputValue }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (SearchWord) => {
    try {
      setLoading(true);
      const res = await axios.get(`/${SearchWord}`);
      setResponse(res.data);
      console.log(res.data)
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      fetchData(inputValue);
      //   axios
      //     .get(`/${inputValue}`)
      //     .then((res) => {
      //       setLoading(true);
      //       setResponse(res.data);
      //       setError(null);
      //     })
      //     .catch((err) => {
      //       setError(err);
      //     }).finally(()=>{
      //         setLoading(false);
      //     })
    }
  }, [inputValue]);

  if (loading) {
    return (
      <h1 className="text-center mt-16 pt-2 p-6 text-xl font-light text-navy">
        Loading to get your search Keyword...
      </h1>
    );
  }
  if (error) {
    return <h1 className="text-center mt-16 pt-2 p-6 text-xl font-light text-navy tracking-widest">No words found.</h1>;
  }

  return (
    <main className="w-full h-full mx-auto p-4 text-center">
      {response && (
        <div className="mx-2 pt-3 flex flex-col items-start">
          <div>
            <Title response={response} />
          </div>
         <div className="w-full">
         <p className="mt-4 mb-2 italic text-start text-navy font-light text-base md:text-xl">
         Definition of noun from the Advanced Learner's Pandictionary
          </p>
         <Meanings response={response} />
         </div>         
          {/* <Example response={response} /> */}
          {/* <h4 className="mt-4 text-black font-bold">Synonym</h4> */}
          {/* <Synonyms response={response} /> */}
          {/* <h4 className="mt-4 text-black font-bold">Antonym</h4> */}
          {/* <Antonyms response={response} /> */}

        </div>
      )}
    </main>
  );
};
export default SearchResults;
