import { useState } from "react"
import HeaderListElement from "./HeaderListElement"
import { MdLocationOn, MdOutlineMenu } from 'react-icons/md';

import HeaderBrand from "./HeaderBrand";

export default function Header() {
  const [path, setPath] = useState("trainers")
  const [menu, setMenu] = useState(false)
  const scrollToSelectedItem = (event) => {
    const path = event.target.outerText.toLowerCase()
    setPath(() => { return path})
    setTimeout(() => {
      setMenu(false)
    }, 300);
    console.log(path)
  }

  const isActive = (val) => {
    return path === val ? 'header__element_active' : ''
  }

  const openMenuHandler = () => {
    setMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="navbar">
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
          <div className="nav link">
            <HeaderListElement
              title="learn"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('learn')}
            />
          </div>
          <div className="nav link">
            <HeaderListElement
              title="price"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('price')}
            />
          </div>
          <div className="nav link">
            <HeaderListElement
              title="trainers"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('trainers')}
            />
          </div>
          <div className="nav link">
            <HeaderListElement
              title="cars"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('cars')}
            />
          </div>
          <div className="nav link">
            <HeaderListElement
              title="on-line"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('on-line')}
            />
          </div>
          <div className="nav link">
            <HeaderListElement
              title="feedback"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('feedback')}
            />
          </div>
          <div className="nav link d-lg-none">
            <HeaderListElement
              title="contact"
              scrollToSelectedItem={scrollToSelectedItem}
              isActive={isActive('contact')}
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
            scrollToSelectedItem={scrollToSelectedItem}
            isActive={isActive('contact')}
          />
        </div>
      </div>
    </div>
  )
}