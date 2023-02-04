import "../../assets/styles/sections/onlineLearningSection.scss"
import OnlineLearningCard from "../Cards/OnlineLearningCard"
import { title, description, icons, courses } from "../../content/onlineLearning"

const OnlineLearningSection = () => {
  return (
    <div className="col-12">
      <OnlineLearningCard
        title={title}
        description={description}
        icons={icons}
        courses={courses}
      />
    </div>
  )
}

export default OnlineLearningSection