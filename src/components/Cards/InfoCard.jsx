import Button from "../Global/Button";
import IconWithDescr from "./IconWithDescr"

import "../../assets/styles/cards/infoCard.scss";


export default function InfoCars(props) {
  return (
    <div className="infoCard container p-4 p-lg-5">
      <div className="pb-3">
        <h1>
          { props.info[0].mainTitle }
        </h1>
        <h5>
          { props.info[0].mainSubtitle }
        </h5>
      </div>

      <div className="row">
        {
          props.info.map((info, index) =>
            (
              index > 0 &&
              <div className="col-12 col-md-6 col-lg-12">
                <IconWithDescr
                  info={info}
                />
              </div>
            )
          )
        }
      </div>
      <div className="infoCard__row">
        <h1>
          { props.info[0].price}
        </h1>
      </div>
      <div className="infoCard__row">
        <Button
          title="Follow"
        />
      </div>
    </div>
  )
}