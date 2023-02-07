import header from "../../../content/header.js"

const HeaderBrand = (props) => {
  return (
    <div className="header__brand">
      <div className="d-flex flex-column">
        {header.title}
        <label>{header.subtitle}</label>
      </div>
    </div>
  )
}

export default HeaderBrand
