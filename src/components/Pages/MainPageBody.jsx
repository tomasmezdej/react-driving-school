

import Banner from "../Cards/Banner";
import InfoCard from "../Cards/InfoCard";
import TrainersCard from "../Cards/TrainersCard"

import { firstCard, secondCard} from "./content/infoCard"
import { trainersTitle, trainersDescription, infos, trainers } from "./content/trainersCard"

export default function MainPageBody() {


  return (
    <div className="mainPageBody container">
      <div className="row">
        <div className="col-12">
          <Banner />
        </div>
      </div>
      <div className="row">
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
      </div>
      <div className="row">
        <div className="col-12r">
          <TrainersCard
            title={trainersTitle}
            description={trainersDescription}
            info={infos}
            trainers={trainers}
          />
        </div>

      </div>
    </div>
  )
}