import React from "react";
import { useLocation } from "react-router-dom";
const ImageDetail = () => {
  const location = useLocation();
  return (
    <div className="imagedetailcomponent">
      <img src={location.state.url} alt={location.state.tags} />
      <h2>Image Detail</h2>
      <div className="imagedetails">
        <p>
          User: <span>{location.state.user}</span>
        </p>
        <p>
          Id: <span>{location.state.id}</span>
        </p>
        <p>
          Downloads: <span>{location.state.downloads}</span>
        </p>
        <p>
          Likes: <span>{location.state.likes}</span>
        </p>
        <p>
          Comments: <span>{location.state.comments}</span>
        </p>
        <p>
          Tags: <span>{location.state.tags}</span>
        </p>
      </div>
    </div>
  );
};
export default ImageDetail;
