import "../../assets/styles/cards/contactCard.scss"
import ContactElementAddress from "./ContactElementAddress"
import ContactElement from "./ContactElement"
import { useState } from "react";

const ContactCard = (props) => {

  const [scrolledPast, setScrolledPast] = useState(false)

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("CONTACT_CARD");
    // if (elementTarget.offsetTop - )
    if (elementTarget.offsetTop - window.scrollY < 700) {
      if (!scrolledPast) {
        setScrolledPast(true)
      }
    } else {
      if (scrolledPast) {
        setScrolledPast(false)
      }
    }
  })

  return (
    <div id="CONTACT_CARD" className="contactCard">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
              <h1 className={`${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
                { props.info.title }
              </h1>
              <div className={`d-flex ${scrolledPast ? "slide-from-right" : "hidden-from-right"}`}>
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
          <h6 className={`${scrolledPast ? "slide-from-left" : "hidden-from-left"}`}>
            { props.info.subtitle }
          </h6>
        </div>
        <div className={`col-12 ${scrolledPast ? "slide-from-bottom" : "hidden-from-bottom"}`}>
          <ContactElementAddress
            channel={props.info}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactCard