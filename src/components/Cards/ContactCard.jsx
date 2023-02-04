import "../../assets/styles/cards/contactCard.scss"
import ContactElement from "./ContactElement"

const ContactCard = (props) => {
  return (
    <div className="contactCard">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
        <h1>
          { props.info.title }
        </h1>
        <h6>
          { props.info.subtitle }
        </h6>
      </div>
      <div className="row mt-4 mt-sm-5">
        <div className="row d-flex justify-content-center">
          {
            props.info.channels.map(channel =>
              <ContactElement
                channel={channel}
              />
            )
          }

        </div>
      </div>
    </div>
  )
}

export default ContactCard