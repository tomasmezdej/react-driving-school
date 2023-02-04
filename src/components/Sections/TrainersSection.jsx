import TrainersCard from "../Cards/TrainersCard"
import { trainersTitle, trainersDescription, infos, trainers } from "../../content/trainersCard"
import "../../assets/styles/sections/trainersSection.scss"

const TrainersSection = () => {
  return (
    <div className="col-12">
      <TrainersCard
        title={trainersTitle}
        description={trainersDescription}
        info={infos}
        trainers={trainers}
      />
    </div>
  )
}

export default TrainersSection