
import InfoCard from "../Cards/InfoCard";
import { firstCard, secondCard} from "../../content/infoCard"
import "../../assets/styles/sections/cardsSection.scss"
import { useState } from "react";

const CardsSection = () => {

  const [scrolledPast, setScrolledPast] = useState(false)

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("INFO_CARD_FIRTS");
    // if (elementTarget.offsetTop - )
    if (elementTarget.offsetTop - window.scrollY < 600) {
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
    <>
      <div
        id="INFO_CARD_FIRTS"
        className={`col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center ${scrolledPast ? "slide-from-left" : "hidden-from-left"} `}
      >
        <InfoCard
          info={firstCard}
        />
      </div>
      <div
        id="INFO_CARD_SECOND"
        className={`col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center  ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}
      >
        <InfoCard
          info={secondCard}
        />
      </div>
    </>
  )
}

export default CardsSection