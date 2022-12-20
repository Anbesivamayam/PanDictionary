import React from 'react'

const Example = ({response}) => {

  return (
    <main className=''>
      <h4 className="mt-4 text-black font-bold text-start">Examples</h4>
        {response.map(val => val.meanings.map(means => means.definitions.map((def,index) => (
       <div  className='px-4 flex  items-start'>            
        <p className='text-start'>{def?.example}</p>     
        </div>
   
        ))))}
        {/* <p>{response[0].meanings[0].definitions[0].example || ""}</p> */}

       
    </main>
  )
}

export default Example