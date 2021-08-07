import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Search from './Search';

const GetList = ()=>{   
    const search = useRef() 
   const [users,setUsers]=useState('');   
    const getUsers=  () =>{
        axios.get('https://api.github.com/users').then(response=>{               
                setUsers(response.data);   
               })   
        }    
    useEffect(()=>{
        getUsers();
        
    },[]);

    const getDetails = async (name,e) => {   
    
        const profile = await fetch(`https://api.github.com/users/${name}`);
        const profileJson = await profile.json();     
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);    
        if (profileJson) {        
        search.current.setDataFromList(name, profileJson, repoJson)
        }
      };     
   
  return (
      <>   
      <Search ref={search} />        
       <h2 style={{padding : "20px" }}>List Of GitHub Users</h2>    
        <div className="container-fluid mt-5 ">
            <div className="row text-center">
                {
                    users?
                    users.map((curElem)=>{
                        return(
                        <div className=" col-10 col-md-4 mt-5 " key={curElem.id}>  
                            <div className="card p-2">
                                <div className="d-flex align-items-center">                                                   
                                <div className="ml-3 w-100">
                                <h2 className="mb-0 mt-0 textLeft" >
                                UserName : {curElem.login} 
                                </h2>  
                                <br/>                                                           
                                  <button 
                                    className="ui primary button"
                                    type="submit"                                    
                                    onClick={(e)=>getDetails(curElem.login, e)} >Get Details
                                    </button>                                                               
                                 </div>
                                </div>
                            </div>   
                        </div>
                        )
                    }):null
                    
                }
                </div>
          </div>      
      </>
  )
}
export default GetList;