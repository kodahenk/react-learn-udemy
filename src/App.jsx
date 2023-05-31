import { useState } from "react";
import Course from "./Course";

function getRandomCourses() {
  let imageNumner = Math.floor(Math.random() * 9) + 1;
  return ["Resim" + imageNumner];
}

function App() {
  const [courses, setCourses] = useState([]);

  return (
    <>
      <div className="container mt-3 p-3">
        <div className="text-center mb-3">
          <button
            onClick={() => {
              setCourses([...courses, getRandomCourses()]);
            }}
            className="btn btn-primary"
          >
            Add Course
          </button>
        </div>
        <div className="row">
          {courses.map((course, index) => {
            return <Course key={index} image={course}></Course>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
