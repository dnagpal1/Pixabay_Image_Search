import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ImageComponent = ({
  url,
  user,
  downloads,
  likes,
  comments,
  tags,
  id,
}) => {
  const imageInfo = { url, user, downloads, likes, comments, tags, id };
  const navigate = useNavigate();
  const toImageDetail = () => {
    navigate("/imagedetail", {
      state: { id, user, downloads, likes, comments, tags, url },
    });
  };
  return (
    <div className="imagecomponent" onClick={() => toImageDetail()}>
      <img src={url} alt={tags} />
    </div>
  );
};

export default ImageComponent;
