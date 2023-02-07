import "../../assets/styles/pages/body/mainPageBody.scss";

import BannerSection from "../Sections/BannerSection"
import CardsSection from "../Sections/CardsSection"
import TrainersSection from "../Sections/TrainersSection"
import CarsSection from "../Sections/CarsSection"
import OnlineLearningSection from "../Sections/OnlineLearningSection"
import ContactSection from "../Sections/ContactSection"

export default function MainPageBody() {

  return (
    <div className="mainPageBody container">
      <div className="row pt-4">
        <BannerSection />
      </div>
      <div className="row pt-5 mt-lg-5" id="PRICE_SECTION">
        <CardsSection />
      </div>
      <div className="row pt-5 mt-lg-5" id="TRAINERS_SECTION">
        <TrainersSection />
      </div>
      <div className="row pt-5 mt-lg-5" id="CARS_SECTION">
        <CarsSection />
      </div>
      <div className="row pt-5" id="ON-LINE_SECTION">
        <OnlineLearningSection />
      </div>
      <div className="row pt-5" id="CONTACT_SECTION">
        <ContactSection />
      </div>

    </div>
  )
}