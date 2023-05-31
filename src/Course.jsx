import Resim1 from "./assets/images/resim1.png";
import Resim2 from "./assets/images/resim2.png";
import Resim3 from "./assets/images/resim3.png";
import Resim4 from "./assets/images/resim4.png";
import Resim5 from "./assets/images/resim5.png";
import Resim6 from "./assets/images/resim6.png";
import Resim7 from "./assets/images/resim7.png";
import Resim8 from "./assets/images/resim8.png";
import Resim9 from "./assets/images/resim9.png";

const courseMap = {
  Resim1,
  Resim2,
  Resim3,
  Resim4,
  Resim5,
  Resim6,
  Resim7,
  Resim8,
  Resim9,
};

function Course({ image }) {
  return (
    <>
      <div className="col-md-2 mb-2">
        <div class="card shadow-sm border border-3 border-dark">
          <img src={courseMap[image]} className="card-img-top rounded-top-1 " />
          <div className="card-body border border-top border-dark border-3 border-bottom-0 border-start-0 border-end-0">
            <p className="card-title text-center">{image}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
