// import Button from "../Global/Button"

import "../../assets/styles/cards/trainersImageCard.scss";

const TrainerImage = (props) => {
  return (
    <div className="trainersImageCard">
      <div className="trainersImageCard__hover_info p-1 p-sm-2">
        <div>
          <h6>
            Driving
          </h6>
          <p>25 years</p>
          <h6>
            Learning
          </h6>
          <p>15 years</p>
          <h6>
            Car type
          </h6>
          <p>All type</p>
        </div>
      </div>
      <img src={props.info.photo} alt="" />
      <div className="trainersImageCard__bottom_info p-1 p-sm-2">
        <h6>
          {props.info.name}
        </h6>
        <small>
          {props.info.city}
        </small>
      </div>
    </div>
  )
}

export default TrainerImage