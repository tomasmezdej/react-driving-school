import "../../assets/styles/cards/contactElement.scss"

import { BiCopy } from "react-icons/bi"

const ContactElement = (props) => {

  const copyButtonHandler = () => {
    navigator.clipboard.writeText(props.channel.link)
  }

  return (
    <div className="contactElement col-6 col-sm-12 col-md-4 col-lg-2 mb-5">
      <div className="contactElement__icon">
        { props.channel.icon }
        <BiCopy
          className="contactElement__copy_icon"
          onClick={copyButtonHandler}
        />
        <small className="contactElement__copied_message">Copied</small>
      </div>
      <div className="contactElement__info">
        <div className="p-1">
          <small>
            { props.channel.site }
          </small>
          <h6>
            { props.channel.description }
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ContactElement