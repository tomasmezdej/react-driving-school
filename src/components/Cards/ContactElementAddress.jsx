import "../../assets/styles/cards/contactElementAddress.scss"
import { BiCopy } from "react-icons/bi"

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

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
              <Tooltip anchorId="COPY_PHONE_ICON_ID" />
              <BiCopy
                id="COPY_PHONE_ICON_ID"
                data-tooltip-content={props.channel.copyTooltipText}
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
              <Tooltip anchorId="COPY_EMAIL_ICON_ID" />
              <BiCopy
                id="COPY_EMAIL_ICON_ID"
                data-tooltip-content={props.channel.copyTooltipText}
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
              <Tooltip anchorId="COPY_ICO_ICON_ID" />
              <BiCopy
                id="COPY_ICO_ICON_ID"
                data-tooltip-content={props.channel.copyTooltipText}
                className="contactElementAddress__copy_icon"
                onClick={() => copyButtonHandler(props.channel.address.ico)}
              />

            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-2 mt-lg-0">
            {
              // eslint-disable-next-line jsx-a11y/iframe-has-title
              <iframe
                src={props.channel.iframeLink}
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