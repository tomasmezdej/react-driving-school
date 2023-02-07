import Button from "../Global/Button";
import logo from "../../assets/images/car.png"

import "../../assets/styles/banner.scss";

import banner from "../../content/banner";

export default function Banner() {

  const handleClick = (id) => {
    document.getElementById(`${id}_SECTION`).scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }

  return (
   <div className="banner d-flex flex-column">
      <div className="d-none d-lg-block banner__background_text">
        { banner.backgroundText }
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <img src={logo} alt="" className="banner__car_logo slide-from-right" />
        </div>
        <div className="col-12">
          <h1 className="slide-from-left">
            { banner.titlePartOne } <br className="d-none d-lg-block" /> { banner.titlePartTwo }
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="slide-from-left">
            { banner.subtitle }
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-lg-3 slide-from-left">
          <Button
            title={ banner.mainButton }
            onClick={() => {handleClick("PRICE")}}
          />
        </div>
        <div className="col-6 col-lg-4 d-flex justify-content-start slide-from-left">
          <Button
            secondary
            title={ banner.secondaryButton }
            onClick={() => {handleClick("CONTACT")}}
          />
        </div>
      </div>
   </div>
  )
}
