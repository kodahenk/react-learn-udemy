import ImageItem from "./ImageItem";
function ImageList({ imagePlaceholder }) {
  // console.log(imagePlaceholder);
  return (
    <>
      {imagePlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </>
  );
}

export default ImageList;
