import { useState } from "react"
import HeaderListElement from "./HeaderListElement"
import { MdLocationOn, MdOutlineMenu } from 'react-icons/md';

import HeaderBrand from "./HeaderBrand";

import "../../../assets/styles/main/header.scss";

export default function Header() {
  const [menu, setMenu] = useState(false)

  const scrollToSelectedItem = (id) => {
    document.getElementById(`${id}_SECTION`).scrollIntoView({ block: 'start',  behavior: 'smooth' })
    setTimeout(() => {
      if (menu) {
        setMenu(false)
      }
    }, 300);
  }

  const openMenuHandler = () => {
    setMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="navbar" style={{"z-index": "100"}} id="HOME_SECTION">
      <div className="container">

        <div className="navbar brand header__brand_mobile">
          <HeaderBrand />
          <div className="d-lg-none header__menu">
            <MdOutlineMenu
              style={{"color": "white"}}
              size={40}
              onClick={openMenuHandler}
            />
          </div>
        </div>
        <div className={`nav me-auto ${(menu) ? "header__nav_mobile" : "header__nav_mobile_hidden"}`}>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("HOME")}}
          >
            <HeaderListElement
              title="Home"
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("PRICE")}}
          >
            <HeaderListElement
              title="price"
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("TRAINERS")}}
          >
            <HeaderListElement
              title="trainers"
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("CARS")}}
          >
            <HeaderListElement
              title="cars"
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("ON-LINE")}}
          >
            <HeaderListElement
              title="on-line"
            />
          </div>
          {
            /*
            <div
              className="nav link"
              onClick={() => {scrollToSelectedItem("FEEDBACK")}}
            >
              <HeaderListElement
                title="feedback"
              />
            </div>
            */
          }
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("CONTACT")}}
          >
            <HeaderListElement
              title="contact"
            />
          </div>
        </div>
        <div className="nav link d-none d-lg-block">
          <HeaderListElement
            title="+7 903 666-74-79"
            color="white"
            icon={<MdLocationOn size={20}/>}
            className="header__contact"
            subtitle="All districts"
          />
        </div>
      </div>
    </div>
  )
}