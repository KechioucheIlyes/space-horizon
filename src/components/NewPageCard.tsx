import { News } from "@/utils/types"
import { CircleArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import noImage from './../assets/images/no-image.jpg'
const NewPageCard = ({news} : {news : News , key:number}) => {
    const {url , image_url , title , published_at , news_site , summary} = news

    const handleImageError = (e:React.ChangeEvent<HTMLImageElement> )=> {
        e.currentTarget.src = noImage
    }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-3">
        <div className="p-2 overflow-hidden lg:col-span-1 h-[300px] md:h-[400px] lg:h-full">
            <Link to={url} target="_blank"  >

            <img  src={image_url } alt={`${title}-img`} onError={handleImageError} className=" w-full h-full object-cover "/>
            </Link>
        </div>
        <div className="p-2 overflow-hidden lg:col-span-3 h-[300px] md:h-[200px] lg:h-full">
            <p className="text-2xl font-bold">
                {title}
            </p>

            <div className="flex flex-col items-start">
            <p className="">
                {published_at.split('T')[0]}
            </p>
            <div className=" flex flex-row gap-x-3">
            <span>{news_site}</span> 
            <span className="">|</span>
            <span className="">Read from source </span>
            <Link to={url} target="_blank">
            <CircleArrowRight color="purple" className="hover:scale-150 transition-all "/>
            </Link>
            </div>


            <p className="mt-4">{summary}</p>

            </div>
           

        </div>
    </div>
  )
}

export default NewPageCard