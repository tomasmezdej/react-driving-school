import "../../assets/styles/cards/contactElementAddress.scss"
import { BiCopy } from "react-icons/bi"

const ContactElementAddress = (props) => {

  const copyButtonHandler = (val) => {
    navigator.clipboard.writeText(val)
  }

  return (
    <div className="row mb-2 mb-lg-5">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className="contactElementAddress row mx-0 p-2 p-sm-4">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <h6>
              Address
            </h6>
            <small className="bold">
              { props.channel.address.street }, <br />
              { props.channel.address.city }
            </small>
            <div className="contactElementAddress__divider my-2"/>
            <h6>
              Phone
            </h6>
            <div className="d-flex justify-content-between ">
              <small className="bold">
                { props.channel.address.phone }
              </small>
              <BiCopy
                className="contactElementAddress__copy_icon"
                onClick={() => copyButtonHandler(props.channel.address.phone)}
              />

            </div>
            <div className="contactElementAddress__divider my-2"/>
            <h6>
              Email
            </h6>
            <div className="d-flex justify-content-between">
              <small className="bold">
                { props.channel.address.email }
              </small>
              <BiCopy
                className="contactElementAddress__copy_icon"
                onClick={() => copyButtonHandler(props.channel.address.email)}
              />

            </div>
            <div className="contactElementAddress__divider my-2"/>
            <h6>
              IČO
            </h6>
            <div className="d-flex justify-content-between">
              <small className="bold">
                { props.channel.address.ico }
              </small>
              <BiCopy
                className="contactElementAddress__copy_icon"
                onClick={() => copyButtonHandler(props.channel.address.ico)}
              />

            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-2 mt-lg-0">
            {
              // eslint-disable-next-line jsx-a11y/iframe-has-title
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48374.32498333731!2d-74.25381313438096!3d40.73132627501041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2zTmV3YXJrLCBOZXcgSmVyc2V5LCBTcG9qZW7DqSDFoXTDoXR5IGFtZXJpY2vDqQ!5e0!3m2!1ssk!2ssk!4v1675602682320!5m2!1ssk!2ssk"
                className="contactElementAddress__iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactElementAddress