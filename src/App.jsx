import { useState } from "react";
import SearchForm from "./SearchForm";
import ImageList from "./ImageList";
import "./App.css";
import searchImages from "./Api";

function App() {
  const [images, setImages] = useState([0]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <div className="container border shadow-sm p-3 my-5">
        <SearchForm search={handleSubmit}></SearchForm>
        <ImageList imagePlaceholder={images}></ImageList>
      </div>
    </>
  );
}

export default App;
