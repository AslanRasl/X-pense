import "./activities.scss";
import Back from "./back.png";
import Cola from "./cola.png";
import Facebook from "./facebook.png";
import Google from "./google.png";
import Over from "./overview.svg";
import Samsung from "./samsung.png";
import Link from "./linkedin.png"

const Activities = () => {
  return (
    <div className="activ_wrapper">
      <div className="activ">
        <div className="container activ__inner">

        </div>
      </div>
      <div className="container3">
        <ul className="activ__list">
            <li><img src={Facebook} alt="" /></li>
            <li><img src={Google} alt="" /></li>
            <li><img src={Cola} alt="" /></li>
            <li><img src={Link} alt="" /></li>
            <li><img src={Samsung} alt="" /></li>
           
        </ul>
      </div>
    </div>
  );
};

export default Activities;
