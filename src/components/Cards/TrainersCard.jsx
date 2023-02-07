import IconWithDescr from "./IconWithDescr"
import TrainerImage from "./TrainerImage"

import "../../assets/styles/cards/trainersCard.scss";
import { useState } from "react";

/*
  props = {
    title
    description
    info
    trainers
  }
*/
const TrainersCard = (props) => {

  const [scrolledPast, setScrolledPast] = useState(false)

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("TRAINERS_HEADER");
    // if (elementTarget.offsetTop - )
    if (elementTarget.offsetTop - window.scrollY < 800) {
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
      <div id="TRAINERS_HEADER" className={`col-12 col-sm-12 col-md-5 col-lg-6  ${scrolledPast ? "slide-from-left" : "hidden-from-left"} `}>
        <h1>
          { props.title }
        </h1>
        <h6>
          { props.description }
        </h6>
        <div className="mt-4 mb-sm-0 mb-5 slide-from-left" style={{maxWidth: "500px"}}>
          { props.info.map((info, index) =>
              <IconWithDescr
                key={index}
                info={info}
              />
            )
          }
        </div>
      </div>
      <div className={`col-12 col-sm-12 col-md-7 col-lg-6  ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}>
        <div className="row">
          {
            props.trainers.map((trainerInfo, index) =>
              <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                <TrainerImage
                  info={trainerInfo}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TrainersCard