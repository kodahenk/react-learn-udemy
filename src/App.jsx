import { useState } from "react";
import Course from "./Course";

function App() {
  const [course, setCourse] = useState(11);


  return (
    <>
      <div className="container mt-3 shadow-sm border p-3">
        <Course></Course>
      </div>
    </>
  );
}

export default App;
