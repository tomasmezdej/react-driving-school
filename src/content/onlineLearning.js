
import { BsGraphUp } from "react-icons/bs"
import { VscFeedback } from "react-icons/vsc"
import { AiOutlineGlobal } from "react-icons/ai"



const iconSize = 50
const iconColor = "#f34643"

export const title = "On-line learning"

export const description = `
  Check the quality of our lectures, and do not go to a lecture at the driving school anymore`

export const icons = [
  {
    title: "Everywhere  & everytime",
    icon: <AiOutlineGlobal size={iconSize} style={{"color": iconColor}}/>,
    text: `
      Be engaged in always and where it is convenient for you from any gadget`

  },
  {
    title: "Feedback",
    icon: <VscFeedback size={iconSize} style={{"color": iconColor}}/>,
    text: `
      Ask questions on the air and get quick answers`

  },
  {
    title: "Learning",
    icon: <BsGraphUp size={iconSize} style={{"color": iconColor}}/>,
    text: `
      Pass the online tests on the official traffic police programs`

  },
]

export const courses = [
  {
    description: `Course one`
  },
  {
    description: `Course two`
  }
]