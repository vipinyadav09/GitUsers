import React, { useState, useImperativeHandle, useEffect } from "react";
import DisplayTable from "./DisplayTable";

const Search = (props, ref) => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const setDataFromList=(p1, p2, p3)=>{
    setData(p2);
    setRepositories(p3);  
    setUsername(p1)   
  }
  useImperativeHandle(ref, () => ({
    setDataFromList
  }));

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json(); 
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json(); 

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
      console.log(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <h1>Search Username</h1>
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>
          <br/>
          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default React.forwardRef(Search);