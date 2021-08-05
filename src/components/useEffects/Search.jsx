import react, { useState } from 'react';
const Search = ()=>{
    const[name,setName]=useState();
    return(
        <>
        <div>
         <input type="text" placeholder="Search Users"></input>
         </div>
        </>
    )

}
export default Search;