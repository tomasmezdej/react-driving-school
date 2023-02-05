import "../../assets/styles/cards/contactElement.scss"

const ContactElement = (props) => {

  const className = `contactElement mb-5 ${props.className}`

  const handleClick = () => {
    window.open(props.channel.link, '_blank')
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="contactElement__icon">
        { props.channel.icon }
      </div>
    </div>
  )
}

export default ContactElement