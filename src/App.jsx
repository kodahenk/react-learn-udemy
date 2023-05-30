import "./App.css";
import { Header } from "./Header";
import { Course } from "./Course";

// resimler
import Resim1 from "./assets/images/resim1.png";
import Resim2 from "./assets/images/resim2.png";
import Resim3 from "./assets/images/resim3.png";
import Resim4 from "./assets/images/resim4.png";
import Resim5 from "./assets/images/resim5.png";
import Resim6 from "./assets/images/resim6.png";
import Resim7 from "./assets/images/resim7.png";
import Resim8 from "./assets/images/resim8.png";
import Resim9 from "./assets/images/resim9.png";


function App() {
  return (
    <>
      <Header courseTitle="Course List"></Header>
      <div className="container">
        <div className="row">
          <Course title="Title 1" desc="Description 1" image={Resim1}></Course>
          <Course title="Title 2" desc="Description 2" image={Resim2}></Course>
          <Course title="Title 3" desc="Description 3" image={Resim3}></Course>
          <Course title="Title 4" desc="Description 4" image={Resim4}></Course>
          <Course title="Title 5" desc="Description 5" image={Resim5}></Course>
          <Course title="Title 6" desc="Description 6" image={Resim6}></Course>
          <Course title="Title 7" desc="Description 7" image={Resim7}></Course>
          <Course title="Title 8" desc="Description 8" image={Resim8}></Course>
          <Course title="Title 9" desc="Description 9" image={Resim9}></Course>
        </div>
      </div>
    </>
  );
}

export default App;
