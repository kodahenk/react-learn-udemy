import { useState } from "react";

function SearchForm({ search }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Search:
            </label>
            <input
              type="text"
              className="form-control"
              id="query"
              aria-describedby="emailHelp"
              value={value}
              onChange={handleChange}
            />
            <div id="queryHelp" className="form-text text-dark">
              unsplash.com search for {value}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
