function ImageItem({ image }) {
  return (
    <>
      <img src={image.urls.small} className="img-fluid" />
    </>
  );
}

export default ImageItem;
