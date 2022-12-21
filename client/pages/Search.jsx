import React, { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
const Search = () => {
  const [hits, setHits] = useState([]);
  const [search, setSearch] = useState("");
  const [updated, setUpdated] = useState("Christmas");
  const [imageDetail, setImageDetail] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setUpdated(search);
  };

  const fetchMain = async () => {
    let response;
    if (updated === "") {
      response = await fetch(`/api/`);
    } else {
      response = await fetch(`/api/${updated}`);
    }
    response = await response.json();
    console.log(response);
    setHits(response.hits);
  };

  useEffect(() => {
    fetchMain();
  }, [updated, imageDetail]);

  return (
    <>
      <div id="searchcontainer">
        <input
          type="text"
          placeholder="Please type in your search. Showing results for: 'Christmas'"
          onChange={handleChange}
          className="search-bar"
        ></input>
        <button className="search-buttons" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="picturecontainer">
        {hits.map((img) => {
          return (
            <ImageComponent
              key={img.id}
              url={img.webformatURL}
              user={img.user}
              likes={img.likes}
              comments={img.comments}
              tags={img.tags}
              id={img.id}
              downloads={img.downloads}
            />
          );
        })}
      </div>
    </>
  );
};

export default Search;
