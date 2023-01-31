import {useState} from "react"
import HeaderListElement from "./HeaderListElement"
import { MdLocationOn } from 'react-icons/md';

import logo from "../../../assets/images/car.png"

export default function Header() {
  const [path, setPath] = useState("trainers")

  const scrollToSelectedItem = (event) => {
    const path = event.target.outerText.toLowerCase()
    setPath(() => { return path})
    console.log(path)
  }

  const isActive = (val) => {
    return path === val ? 'active' : ''
  }


  return (
    <div className="header">
      <ul>
        <li className="logo">
          ZUEVAUTO
          <label>Driving school</label>
        </li>
      </ul>
      <ul>
        <HeaderListElement
          title="learn"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('learn')}
        />
        <HeaderListElement
          title="price"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('price')}
        />
        <HeaderListElement
          title="trainers"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('trainers')}
        />
        <HeaderListElement
          title="cars"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('cars')}
        />
        <HeaderListElement
          title="on-line"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('on-line')}
        />
        <HeaderListElement
          title="feedback"
          scrollToSelectedItem={scrollToSelectedItem}
          isActive={isActive('feedback')}
        />
      </ul>
      <ul>
        <li className="contact">
          +7 903 666-74-79
          <label>
            <MdLocationOn size={20}/>
            All districts
          </label>
        </li>
      </ul>

      {
        /*
        <div className="main_blob">
          <img src={logo} alt="" />
        </div>
        */
      }
    </div>
  )
}