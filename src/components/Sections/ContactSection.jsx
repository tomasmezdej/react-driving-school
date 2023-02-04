import ContactCard from "../Cards/ContactCard"
import {info} from "../../content/contactCard"
const ContactSection = () => {
  return (
    <div className="col-12">
      <ContactCard
        info={info}
      />
    </div>
  )
}

export default ContactSection