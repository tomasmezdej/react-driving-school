import "../../assets/styles/cards/carImageCard.scss"

import { AiOutlineStar } from "react-icons/ai"

import test_car from "../../assets/images/test_car.png"
// import Button from "../Global/Button"

const CarImage = (props) => {
  const ratingArray = []
  for (let index = 0; index <  props.car.rating; index++) {
    ratingArray.push(
      <AiOutlineStar
        key={index}
        size={25}
        strokeWidth="3"
      />
    )

  }

  return (
    <div className="carImage p-2 p-sm-4">
      <div className="carImage__background_text">
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
      <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
          <div className="carImage__rating_holder d-flex align-items-center justify-content-center">
            {
              ratingArray
            }
          </div>
        </div>
      </div>
      {
        /*
      <Button
        className="carImage__button mt-3 mt-sm-4"
        title="Select"
      />
        */
      }
    </div>
  )
}

export default CarImage