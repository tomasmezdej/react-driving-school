import CarImage from "./CarImage"

import "../../assets/styles/cards/trainersCard.scss";
import { useState } from "react";
/*
  props: {
    title
    description
    cars
  }
*/
const CarsCard = (props) => {

  const [scrolledPast, setScrolledPast] = useState(false)

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("CARS_CARD_HEADER");
    // if (elementTarget.offsetTop - )
    if (elementTarget.offsetTop - window.scrollY < 700) {
      if (!scrolledPast) {
        setScrolledPast(true)
      }
    } else {
      if (scrolledPast) {
        setScrolledPast(false)
      }
    }
  })

  return (
    <div className="trainersCard row">
      <div id="CARS_CARD_HEADER" className={`col-12 col-sm-12 col-md-12 col-lg-4 mb-4 ${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
        <h1>
          { props.title }
        </h1>
        <h6>
          { props.description }
        </h6>
      </div>
      <div className={`col-12 col-sm-12 col-md-12 col-lg-12 ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}>
        <div className="row">
          {
            props.cars.map((car, index) =>
              <div key={index} className={`mb-4 mb-sm-5 col-12 col-sm-12 col-md-${(index % 2 === 0 && index > 0) ? "12" : "6"} col-lg-4`}>
                <CarImage
                  car={car}
                />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default CarsCard