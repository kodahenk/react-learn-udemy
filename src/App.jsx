import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container border shadow-sm p-3 my-5">
        <form>
          <div class="mb-3">
            <label htmlFor="query" className="form-label">
              Search:
            </label>
            <input
              type="email"
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

export default App;
