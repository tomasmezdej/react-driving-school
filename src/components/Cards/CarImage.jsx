import "../../assets/styles/cards/carImageCard.scss"

import test_car from "../../assets/images/test_car.png"
import Button from "../Global/Button"

const CarImage = (props) => {

  return (
    <div className="carImage p-2 p-sm-4">
      <div class="carImage__background_text">
        { props.car.shortTitle }
      </div>
      <h5 className="mt-5">
        {props.car.title}
      </h5>
      <div className="carImage__image_holder">
        <img src={test_car} alt="" className="" />
      </div>
      <p>
        <small>
          {props.car.transmission}
        </small>
      </p>
      <small>
        {props.car.description}
      </small>
      <Button
        className="carImage__button mt-3 mt-sm-4"
        title="Select"
      />
    </div>
  )
}

export default CarImage