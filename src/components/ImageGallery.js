import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = (props) => {
  return (
    <ul className="ImageGallery">
      {props.images.length ? (
        props.images.map((image) => (
          <ImageGalleryItem
            itemClick={() => props.onItemClick(image.largeImageURL)}
            key={image.id}
            source={image.webformatURL}
          />
        ))
      ) : (
        <div>No photos to show</div>
      )}
    </ul>
  );
};

export default ImageGallery;
