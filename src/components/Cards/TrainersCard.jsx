import IconWithDescr from "./IconWithDescr"
import TrainerImage from "./TrainerImage"

import "../../assets/styles/cards/trainersCard.scss";

/*
  props = {
    title
    description
    info
    trainers
  }
*/
const TrainersCard = (props) => {

  return (
    <div className="trainersCard row">
      <div className="col-12 col-sm-12 col-md-5 col-lg-6">
        <h1>
          { props.title }
        </h1>
        <h6>
          { props.description }
        </h6>
        <div className="mt-4 mb-sm-0 mb-5" style={{maxWidth: "500px"}}>
          { props.info.map((info, index) =>
              <IconWithDescr
                key={index}
                info={info}
              />
            )
          }
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-7 col-lg-6">
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