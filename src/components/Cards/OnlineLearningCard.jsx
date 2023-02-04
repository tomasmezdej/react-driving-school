import "../../assets/styles/cards/onlineLearningCard.scss"
import IconWithDescr from "./IconWithDescr"

const OnlineLearningCard = (props) => {
  return (
    <div className="onlineLearningCard">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
        <h1>
          { props.title }
        </h1>
        <h6>
          { props.description }
        </h6>
      </div>
      <div className="row">
        { props.icons.map((info, index) =>
            <div className={`col-12 col-sm-12 col-md-${index === 0 ? "12" : "6"} col-lg-4`}>
              <IconWithDescr
                info={info}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default OnlineLearningCard