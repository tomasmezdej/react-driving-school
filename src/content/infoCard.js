import { CiViewList } from 'react-icons/ci';
import { IoMedalOutline, IoWarningOutline } from 'react-icons/io5';
import { IoSchoolOutline } from "react-icons/io5"
import { IoIosTimer } from "react-icons/io"
import { GiSteeringWheel, GiCheckeredFlag } from "react-icons/gi"
import { TbRoad } from "react-icons/tb"

const iconSize = 60
const iconColor = "#f34643"

export const firstCard = [
  {
    mainTitle: "Driver`s license",
    mainSubtitle: "Theoretical training, driving instruction, passing the exam in the police",
    price: "700 €"
  },
  {
    icon: <IoSchoolOutline size={iconSize} style={{"color": iconColor}} />,
    title: "Learn",
    text: "Do online at a convenient location, or attend classes at a driving school."
  },
  {
    icon: <IoIosTimer size={iconSize} style={{"color": iconColor}}/>,
    title: "Duration",
    text: "From the moment of the beginning of training to the delivery of rights, an average of 2-4 months."
  },
  {
    icon: <CiViewList size={iconSize} style={{"color": iconColor}}/>,
    title: "Exam",
    text: "Legal exam in the traffic police without bribes and biased attitude towards students."
  },
  {
    icon: <IoMedalOutline size={iconSize} style={{"color": iconColor}}/>,
    title: "Guarantee",
    text: "We guarantee driving instruction and obtaining a driver´s license"
  }
]
export const secondCard =  [
  {
    mainTitle: "Updating skills",
    mainSubtitle: "For drivers who have not driven a car regularly in a city for more than a year.",
    price: "440 €"
  },
  {
    icon: <IoWarningOutline size={iconSize} style={{"color": iconColor}} />,
    title: "Traffic Laws",
    text: "Repeating theory, passing tests, reviewing the innovations of traffic rules."
  },
  {
    icon: <GiSteeringWheel size={iconSize} style={{"color": iconColor}}/>,
    title: "Practice",
    text: "Difficult places on city roads, road situations, tramway rails."
  },
  {
    icon: <TbRoad size={iconSize} style={{"color": iconColor}}/>,
    title: "Extreme",
    text: "Driving in conditions of controlled drifts, contravenous preparation."
  },
  {
    icon: <GiCheckeredFlag size={iconSize} style={{"color": iconColor}}/>,
    title: "Bonus",
    text: "Riding outside the city and motorways."
  }
]