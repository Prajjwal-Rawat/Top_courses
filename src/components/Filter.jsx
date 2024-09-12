import { useState } from "react";


function Filter({filterData, setCategory, category}){

    function HandleFilter(title){
        setCategory(title);
    }

return(
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
           filterData.map((filter) => {
              return <button onClick={() => HandleFilter(filter.title)} className={`text-lg px-2 py-1 rounded-md font-medium hover:bg-opacity-50
                border-2 ${category === filter.title ? 'text-black bg-white': 'text-white bg-black'}`}

               key={filter.id}>{filter.title}</button>
           })
        }
    </div>
)
}

export default Filter;