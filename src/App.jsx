import { useState } from "react";
import SearchForm from "./SearchForm";
import "./App.css";
import searchImages from "./Api";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (term) => {
    searchImages(term);
    // debugger;
    console.log(term);
  };

  return (
    <>
      <div className="container border shadow-sm p-3 my-5">
        <SearchForm search={handleSubmit}></SearchForm>
      </div>
    </>
  );
}

export default App;
