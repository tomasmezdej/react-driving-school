import "../../assets/styles/cards/onlineLearningCard.scss"
import Button from "../Global/Button"
import IconWithDescr from "./IconWithDescr"
import { useState } from "react";

const OnlineLearningCard = (props) => {

  const testPageLink = "https://soferuj.sk/testy"

  const handleOpenTestOnSeparatedPage = () => {
    window.open(testPageLink, '_blank')
  }

  const [scrolledPast, setScrolledPast] = useState(false)

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("ONLINE_LEARNING_CARD");
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
    <div id="ONLINE_LEARNING_CARD" className="onlineLearningCard">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
        <div className="d-flex justify-content-between">
          <h1 className={`${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
            { props.title }
          </h1>
          <Button
            className={`onlineLearningCard__button_mobile_hidden ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}
            title={props.buttonText}
            onClick={handleOpenTestOnSeparatedPage}
          />
        </div>
        <h6 className={`onlineLearningCard__limited_text ${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
          { props.description }
        </h6>
      </div>
      <div className={`row ${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
        { props.icons.map((info, index) =>
            <div key={index} className={`col-12 col-sm-12 col-md-${index === 0 ? "12" : "6"} col-lg-4`}>
              <IconWithDescr
                info={info}
              />
            </div>
          )
        }
      </div>
      <div className={`row pt-3 pt-sm-5 onlineLearningCard__button_mobile_visible ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}>
        <div className="col-12 d-flex justify-content-between flex-column flex-lg-row">
          <Button
            title={props.buttonText}
            onClick={handleOpenTestOnSeparatedPage}
          />
        </div>
      </div>
    </div>
  )
}

export default OnlineLearningCard