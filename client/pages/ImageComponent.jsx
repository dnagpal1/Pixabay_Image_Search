import React from "react";
const ImageComponent = ({ url, user, downloads, likes, comments, tags }) => {
  return (
    <div className="imagecomponent">
      <img src={url} alt={tags} />
    </div>
  );
};

export default ImageComponent;
