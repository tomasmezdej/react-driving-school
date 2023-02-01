import IconWithDescr from "./IconWithDescr"
import TrainerImage from "./TrainerImage"

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
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <h1>
          { props.title } {props.trainers[0].name}
        </h1>
        <h6>
          { props.description }
        </h6>
        <div className="w-75 mt-5">
          <IconWithDescr
            info={props.info[0]}
          />
          <IconWithDescr
            info={props.info[1]}
          />
          <IconWithDescr
            info={props.info[2]}
          />
          <IconWithDescr
            info={props.info[3]}
          />
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="row">
          <div className="col-4">
            <TrainerImage
              info={props.trainers[0]}
            />
          </div>
          <div className="col-4">
            <TrainerImage
              info={props.trainers[1]}
            />
          </div>
          <div className="col-4">
            <TrainerImage
              info={props.trainers[2]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TrainerImage
              info={props.trainers[3]}
            />
          </div>
          <div className="col-4">
            <TrainerImage
              info={props.trainers[4]}
            />
          </div>
          <div className="col-4">
            <TrainerImage
              info={props.trainers[5]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainersCard