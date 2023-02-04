
import { TbLicense, TbRoute } from "react-icons/tb"
import { IoCarSportOutline } from "react-icons/io5"
import { BsStar } from "react-icons/bs"

import trainerOne from "../assets/images/trainerOne.png"
import trainerTwo from "../assets/images/trainerTwo.png"
import trainerThree from "../assets/images/trainerThree.png"
import trainerFour from "../assets/images/trainerFour.png"


const iconSize = 50
const iconColor = "#f34643"

export const trainersTitle = "Trainers"

export const trainersDescription = `
  An experienced driver is not always a good teacher.
  Our trainers will analyze your mistakes and you will
  understand why they arise`

export const infos = [
  {
    icon: <TbLicense size={iconSize} style={{"color": iconColor}} />,
    title: "License",
    text: "Any of our instructors have a right to edication."
  },
  {
    icon: <TbRoute size={iconSize} style={{"color": iconColor}} />,
    title: "Routes",
    text: "Training routes in any areas of your city, driving on the official routes."
  },
  {
    icon: <IoCarSportOutline size={iconSize} style={{"color": iconColor}} />,
    title: "Cars",
    text: "The instructor rects normally to your mistakes behind the wheel of the car."
  },
  {
    icon: <BsStar size={iconSize} style={{"color": iconColor}} />,
    title: "Appearance",
    text: "The coach always looks and behaves properly."
  },
]

export const trainers = [
  {
    photo: trainerOne,
    name: "Dmitry Torin",
    city: "Novogirevo",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  },
  {
    photo: trainerTwo,
    name: "Dmitry Torin",
    city: "Novogirevo",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  },
  {
    photo: trainerThree,
    name: "Mikhail Karpov",
    city: "Aeroport, Sokol",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  },
  {
    photo: trainerTwo,
    name: "Kirill Dikiiy",
    city: "Balashikha",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  },
  {
    photo: trainerThree,
    name: "Elena Karpova",
    city: "Kashirskoe Shosse",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  },
  {
    photo: trainerFour,
    name: "Mikhail Shumov",
    city: "Zyablikovo",
    info: {
      driving: "25",
      learning: "15",
      carType: "All type"
    }
  }
]