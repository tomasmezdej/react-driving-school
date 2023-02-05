import "../../assets/styles/cards/onlineLearningCard.scss"
import Button from "../Global/Button"
import IconWithDescr from "./IconWithDescr"

const OnlineLearningCard = (props) => {

  const testPageLink = "https://soferuj.sk/testy"

  const handleOpenTestOnSeparatedPage = () => {
    window.open(testPageLink, '_blank')
  }

  return (
    <div className="onlineLearningCard">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
        <div className="d-flex justify-content-between">
          <h1>
            { props.title }
          </h1>
          <Button
            className="onlineLearningCard__button_mobile_hidden"
            title="Open test on separated page"
            onClick={handleOpenTestOnSeparatedPage}
          />
        </div>
        <h6 className="onlineLearningCard__limited_text">
          { props.description }
        </h6>
      </div>
      <div className="row">
        { props.icons.map((info, index) =>
            <div key={index} className={`col-12 col-sm-12 col-md-${index === 0 ? "12" : "6"} col-lg-4`}>
              <IconWithDescr
                info={info}
              />
            </div>
          )
        }
      </div>
      <div className="row pt-3 pt-sm-5 onlineLearningCard__button_mobile_visible">
        <div className="col-12 d-flex justify-content-between flex-column flex-lg-row">
          <Button
            title="Open test on separated page"
            onClick={handleOpenTestOnSeparatedPage}
          />
        </div>
      </div>
    </div>
  )
}

export default OnlineLearningCard