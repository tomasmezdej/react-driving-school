import Button from "../Global/Button";
import IconWithDescr from "./IconWithDescr"

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
      <IconWithDescr
        info={props.info[1]}
      />
      <IconWithDescr
        info={props.info[2]}
      />
      <IconWithDescr
        info={props.info[3]}
      />
      <IconWithDescr
        info={props.info[4]}
      />
      {
        /*
          <div className="infoCard__row">
        <div className="infoCard__icon">
          { props.info[1].icon }
        </div>
        <div>
          <h4>
            { props.info[1].title }
          </h4>
          <p>
            { props.info[1].text }
          </p>
        </div>
      </div>
      <div className="infoCard__row">
        <div className="infoCard__icon">
          { props.info[2].icon }
        </div>
        <div>
          <h4>
            { props.info[2].title }
          </h4>
          <p>
            { props.info[2].text }
          </p>
        </div>
      </div>
      <div className="infoCard__row">
        <div className="infoCard__icon">
          { props.info[3].icon }
        </div>
        <div>
          <h4>
            { props.info[3].title }
          </h4>
          <p>
            { props.info[3].text }
          </p>
        </div>
      </div>
      <div className="infoCard__row">
        <div className="infoCard__icon">
          { props.info[4].icon }
        </div>
        <div>
          <h4>
            { props.info[4].title }
          </h4>
          <p>
            { props.info[4].text }
          </p>
        </div>
      </div>

        */
      }
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