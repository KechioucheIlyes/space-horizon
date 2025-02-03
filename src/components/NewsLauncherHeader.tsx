import { Link } from "react-router-dom"
import Title from "./Title"
import { CirclePlay } from "lucide-react"

const NewsLauncherHeader = () => {
  return (
    <div className=" flex justify-center items-center ">
        <Title text="Recent News"/>
        <p className="font-bold ml-auto mr-2">More news</p>
        <Link to={'news'}>
                <CirclePlay color="black" className="transition-all hover:scale-150"/>
        </Link>
    </div>
  )
}

export default NewsLauncherHeader