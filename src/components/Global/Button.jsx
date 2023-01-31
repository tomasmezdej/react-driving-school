export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.secondary ? "secondary-button" : "primary-button"}
    >
      {props.title || "Click me"}
    </button>
  )
}