import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayTable from "./DisplayTable";

const GetList = ()=>{    
   const [users,setUsers]=useState('');  
//    const [data, setData] = useState({});
//    const [username, setUsername] = useState("");
//    const [repositories, setRepositories] = useState([]); 
 
    const getUsers=  () =>{
        axios.get('https://api.github.com/users').then(response=>{               
                setUsers(response.data);   
               })   
        }
    
    useEffect(()=>{
        getUsers();
    },[]);

    // const passData = (name) =>{
    //     setUsername(name);
    //     submitHandler;
    // }

    // const submitHandler = async e => {
    //     e.preventDefault();
    
    //     const profile = await fetch(`https://api.github.com/users/${username}`);
    //     const profileJson = await profile.json();     
    //     const repositories = await fetch(profileJson.repos_url);
    //     const repoJson = await repositories.json();
    //     console.log(repoJson);    
    //     if (profileJson) {
    //       setData(profileJson);
    //       setRepositories(repoJson);
    //     }
    //   };
   
  return (
      <>        
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
                                 {/* <button 
                                  className="ui primary button"
                                    type="submit"                                    
                                    onClick={()=>passData(curElem.login)}>Get Details</button>  */}
                                     {/* <DisplayTable data={data} repositories={repositories} />                              */}
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