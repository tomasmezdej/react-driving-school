import "../../assets/styles/global/scrollUpButton.scss"
import { BsChevronUp } from "react-icons/bs"

import { useState } from "react"

const ScrollUpButton = () => {

  const [buttonVisibility, setButtonVisibility] = useState(false)

  const handleClick = () => {
    document.getElementById(`HOME_SECTION`).scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }

  window.addEventListener("scroll", () => {
    setButtonVisibility(document.body.getBoundingClientRect().top < -100)
    // console.log(document.body.getBoundingClientRect().top)
  })

  return (
    <div className={`scrollUpButton ${buttonVisibility ? "scrollUpButton__visible" : "scrollUpButton__hidden"}`}>
      <BsChevronUp
        color="white"
        strokeWidth="3"
        onClick={handleClick}
      />
    </div>
  )
}

export default ScrollUpButton