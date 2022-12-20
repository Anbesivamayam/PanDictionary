import React from "react";

const Meanings = ({ response }) => {
  return (
    <main className="w-full mt-2">
      {response.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def, index) => (
            // <div
            //   className="px-4 flex flex-col items-start"
            //   key={def.definition}
            // >
            // <p> Definitions {def.definition}</p>
            //   {/* <ul className="list-disc">
            //     <li className="text-start">{def.definition} </li>
            //   </ul>            */}
            //   {def.example && <span> Example: {def.example}</span>}
            //    {/* <p>{means.synonyms}</p> */}
            //   {/* {means.synonyms  && (
            //      <p>
            //       <span>
            //         Synonyms :{def.synonyms.map((synonyms) => `${synonyms},`)}
            //         Antonyms :{def.antonyms.map((antonyms) => `${antonyms},`)}
            //       </span>
            //     </p>
            //    )}  */}
            // </div>
            <div className="w-full flex flex-row p-4 shadow-xl border-[1px] mb-2 hover:skew-y-1 duration-500
            rounded-lg transition-all ease-in-out ">
              <div key={index} className="w-full space-y-2 ">
                <p className="gap-2 text-start text-darkBlue">
                  <span className=" text-navy font-medium">Meaning: </span>
                  {def.definition}
                </p>
                {def.example && (
                  <div key={index} className="text-start">
                    <p className="text-navy font-medium">
                      Example:
                      <span className="font-normal text-black">
                        {def.example}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )
      )}
    </main>
  );
};

export default Meanings;
