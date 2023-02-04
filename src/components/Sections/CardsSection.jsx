
import InfoCard from "../Cards/InfoCard";
import { firstCard, secondCard} from "../../content/infoCard"
import "../../assets/styles/sections/cardsSection.scss"

const CardsSection = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
        <InfoCard
          info={firstCard}
        />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
        <InfoCard
          info={secondCard}
        />
      </div>
    </>
  )
}

export default CardsSection