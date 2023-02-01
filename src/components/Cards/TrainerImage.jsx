import Button from "../Global/Button"

const TrainerImage = (props) => {
  return (
    <div className="trainersImageCard mb-4">
      <img src={props.info.photo} alt="" />
      <div className="trainersImageCard__show_info_on_hover p-2">
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