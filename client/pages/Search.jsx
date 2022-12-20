import React, { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
const Search = () => {
  const [hits, setHits] = useState([]);
  const [search, setSearch] = useState("");
  const [updated, setUpdated] = useState("pixabay");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setUpdated(search);
    // fetchMain();
  };

  const fetchMain = async () => {
    let response;
    if (updated === "") {
      response = await fetch(`/api/${""}`);
    } else {
      response = await fetch(`/api/${updated}`);
    }
    response = await response.json();
    setHits(response.hits);
  };

  useEffect(() => {
    fetchMain();
    console.log("in useeffect");
  }, [updated]);

  return (
    <>
      <div id="searchcontainer">
        <h1>Search Page</h1>
        <input
          type="text"
          placeholder="Please type in your search"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className="picturecontainer">
        {hits.map((img) => {
          return (
            <ImageComponent
              key={img.id}
              url={img.webformatURL}
              user={img.downloads}
              likes={img.likes}
              comments={img.comments}
              tags={img.tags}
            />
          );
        })}
      </div>
    </>
  );
};

export default Search;
