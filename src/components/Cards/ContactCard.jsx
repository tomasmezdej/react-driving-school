import "../../assets/styles/cards/contactCard.scss"
import ContactElementAddress from "./ContactElementAddress"
import ContactElement from "./ContactElement"

const ContactCard = (props) => {
  return (
    <div className="contactCard">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
              <h1>
                { props.info.title }
              </h1>
              <div className="d-flex">
                <ContactElement
                  className="px-4"
                  channel={props.info.facebook}
                />
                <ContactElement
                  channel={props.info.instagram}
                />
              </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{marginTop: "-30px"}}>
          <h6>
            { props.info.subtitle }
          </h6>
        </div>
        <div className="col-12">
          <ContactElementAddress
            channel={props.info}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactCard