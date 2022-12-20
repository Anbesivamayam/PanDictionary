import React from 'react'

const Synonyms = ({response}) => {
  // console.log(response)
  return (
    <main className=''>
        {/* {response.map(val => val.meanings.map(means => means.definitions.map(def => {
        return def.synonyms?.map(syn => (
            <div >
              <li>{syn}</li>
            </div>          
          ))
        })))}  */}

    {/* <p>{response[0].meanings.synonyms}</p> */}
   {/* { console.log(response[0].meanings.length)} */}
    
    {/* <p>{response[0].origin}</p> */}

      {response.map(val => val.meanings.map(means => means.definitions.map(def => (
       <div key={def.synonyms} className='px-4 flex flex-col items-start'> 
        <ul className='list-disc'>
        <p className='text-start'>{def?.synonyms}</p>
        </ul>
        </div>
        ))))}       
    </main>
  )
}


export default Synonyms