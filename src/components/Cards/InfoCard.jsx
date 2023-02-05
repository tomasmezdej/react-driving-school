// import Button from "../Global/Button";
import IconWithDescr from "./IconWithDescr"

import "../../assets/styles/cards/infoCard.scss";


export default function InfoCars(props) {
  return (
    <div className="infoCard container p-4 p-lg-5">
      <div className="pb-3">
        <h1>
          { props.info.mainTitle }
        </h1>
        <h5>
          { props.info.mainSubtitle }
        </h5>
      </div>

      <div className="row">
        {
          props.info.elements.map((infoElement, index) =>
            (
              <div key={index} className="col-12 col-md-6 col-lg-12">
                <IconWithDescr
                  info={infoElement}
                />
              </div>
            )
          )
        }
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
          <div className="infoCard__price_holder d-flex align-items-center justify-content-center px-5">
            { props.info.price}
          </div>
        </div>
      </div>

      {
        /*
      <div className="infoCard__row">
        <Button
          title={ props.info[0].price}
        />
      </div>
        */
      }
    </div>
  )
}