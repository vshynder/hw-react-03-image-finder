import React from "react";

const ImageGalleryItem = (props) => {
  return (
    <li className="ImageGalleryItem" onClick={props.itemClick}>
      <img
        className="ImageGalleryItem-image"
        alt="something"
        src={props.source}
      />
    </li>
  );
};

export default ImageGalleryItem;
