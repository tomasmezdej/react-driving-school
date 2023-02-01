export default function HeaderListElement (props) {
  const className = `header__element ${props.className} ${props.isActive}`

  return (
    <div className={className} onClick={props.scrollToSelectedItem}>
      <li>
        {props.title}
        <label>
          {props.icon}
          {props.subtitle}
        </label>
      </li>
    </div>
  )
}
/*
<li className="contact">
  +7 903 666-74-79
  <label>
    <MdLocationOn size={20}/>
    All districts
  </label>
</li>
*/