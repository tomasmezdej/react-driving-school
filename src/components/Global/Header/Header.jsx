import { useState } from "react"
import HeaderListElement from "./HeaderListElement"
import { MdLocationOn, MdOutlineMenu } from 'react-icons/md';

import HeaderBrand from "./HeaderBrand";

import "../../../assets/styles/main/header.scss";

import header from "../../../content/header.js"

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
    <div className="navbar slide-from-up" style={{zIndex: "100"}} id="HOME_SECTION">
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
              title={header.home}
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("PRICE")}}
          >
            <HeaderListElement
              title={header.price}
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("TRAINERS")}}
          >
            <HeaderListElement
              title={header.trainers}
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("CARS")}}
          >
            <HeaderListElement
              title={header.cars}
            />
          </div>
          <div
            className="nav link"
            onClick={() => {scrollToSelectedItem("ON-LINE")}}
          >
            <HeaderListElement
              title={header.online}
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
              title={header.contact}
            />
          </div>
        </div>
        <div className="nav link d-none d-lg-block">
          <HeaderListElement
            title={header.phone}
            color="white"
            icon={<MdLocationOn size={20}/>}
            className="header__contact"
            subtitle={header.destinations}
          />
        </div>
      </div>
    </div>
  )
}