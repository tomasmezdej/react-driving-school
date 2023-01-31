export default function HeaderListElement (props) {

  return (
    <div onClick={props.scrollToSelectedItem}>
      <li
        className={props.isActive}
      >
        {props.title}
      </li>
    </div>
  )
}