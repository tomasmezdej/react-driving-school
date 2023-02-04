import "../../assets/styles/sections/carsSection.scss"
import CarsCard from "../Cards/CarsCard"

import { carsTitle, carsDescription, cars } from "../../content/carsCard"

const CarsSection = () => {
  return (
    <div className="col-12">
      <CarsCard
        title={carsTitle}
        description={carsDescription}
        cars={cars}
      />
    </div>
  )
}

export default CarsSection