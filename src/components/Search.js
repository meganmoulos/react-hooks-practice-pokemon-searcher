import React from "react";

function Search({query, onChangeSearch}) {

  function handleChange(e){
    onChangeSearch(e.target.value)
    }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" value={query}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
