import "../../assets/styles/button.scss";

export default function Button(props) {

  const className = `${props.secondary ? "secondary-button" : "primary-button"} ${props.className}`

  return (
    <button
      onClick={props.onClick}
      className={className}
    >
      {props.title || "title=\"Click me\""}
    </button>
  )
}