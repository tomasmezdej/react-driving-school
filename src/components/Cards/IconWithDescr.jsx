const IconWithDescr = (props) => {
  return (
    <div className="infoCard__row">
      <div className="infoCard__icon">
        { props.info.icon }
      </div>
      <div>
        <h4>
          { props.info.title }
        </h4>
        <p>
          { props.info.text }
        </p>
      </div>
    </div>
  )
}

export default IconWithDescr