function SearchForm({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search("orhan");
    // debugger;
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
            />
            <div id="queryHelp" className="form-text text-dark">
              unsplash.com search demo app
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
