import Button from "../Global/Button";
import logo from "../../assets/images/car.png"

import "../../assets/styles/banner.scss";

export default function Banner() {
  return (
   <div className="banner d-flex flex-column">
      <div class="d-none d-lg-block banner__background_text">
          zuevauto
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <img src={logo} alt="" className="banner__car_logo" />
        </div>
        <div className="col-12">
          <h1>
            Become driver <br className="d-none d-lg-block" /> easy & quick
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3>
            Driver´s license and updating skills
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            title="Entry"
          />
          <Button
            secondary
            title="Call me back"
          />
        </div>
      </div>
   </div>
  )
}
