import "./App.css";
import { Course } from "./Course";

// resimler
import Resim1 from './assets/images/resim1.png';
import Resim2 from './assets/images/resim2.png';
import Resim3 from './assets/images/resim3.png';
import Resim4 from './assets/images/resim4.png';

function App() {
  return (
    <>
      <Course title="Title 1" desc="Description 1" image={Resim1}></Course>
      <Course title="Title 2" desc="Description 2" image={Resim2}></Course>
      <Course title="Title 3" desc="Description 3" image={Resim3}></Course>
      <Course title="Title 4" desc="Description 4" image={Resim4}></Course>
    </>
  );
}

export default App;
