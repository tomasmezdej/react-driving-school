import CarImage from "./CarImage"

import "../../assets/styles/cards/trainersCard.scss";
/*
  props: {
    title
    description
    cars
  }
*/
const CarsCard = (props) => {
  return (
    <div className="trainersCard row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
        <h1>
          { props.title }
        </h1>
        <h6>
          { props.description }
        </h6>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          {
            props.cars.map((car, index) =>
              <div key={index} className={`mb-4 mb-sm-5 col-12 col-sm-12 col-md-${(index % 2 === 0 && index > 0) ? "12" : "6"} col-lg-4`}>
                <CarImage
                  car={car}
                />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default CarsCard