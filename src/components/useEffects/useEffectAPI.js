import React, { useEffect, useState } from 'react';
import Search from './Search';

const UseEffectAPI = ()=>{

   const [users,setUsers]=useState([]);  

    const getUsers= async () =>{
        try{
            const response = await fetch('https://api.github.com/users');       
            setUsers(await response.json());
        }catch(error){
             console.log(error);
        }           


    }
    useEffect(()=>{
        getUsers();
    },[]);
   
  return (
      <>
          
           
          <h2>List Of GitHub Users</h2>
          <Search/>
             
          <div className="container-fluid mt-5 ">
                <div className="row text-center">
                  {
                      users.map((curElem)=>{
                          return(
                                <div className=" col-10 col-md-4 mt-5 " key={curElem.id}>  
                                    <div className="card p-2">
                                            <div className="d-flex align-items-center">                                                   
                                                <div className="ml-3 w-100">
                                                        <h4 className="mb-0 mt-0 textLeft">{curElem.login} </h4>                                                                                                                                             
                                                </div>
                                          </div>
                                    </div>                

                                </div>
                          )
                      })
                  }
                    
                    
                </div>
          </div>      
      </>
  )

}
export default UseEffectAPI;