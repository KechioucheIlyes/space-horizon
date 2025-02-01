import { News } from "@/utils/types"
import { Link } from "react-router-dom"

const NewPageCard = ({news , key} : {news : News , key:number}) => {
    const {url , image_url , title , published_at , news_site , summary} = news
  return (
    <div className="">
        <div className="">
            <Link to={url} target="_blank" >
            <img key={key} src={image_url}></img>
            </Link>
        </div>
        <div className=""></div>
    </div>
  )
}

export default NewPageCard