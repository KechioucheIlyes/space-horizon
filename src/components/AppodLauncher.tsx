import { LandingPageNewsAppodHubble } from "@/utils/types"
import { CircleArrowRight } from "lucide-react"
import { Link, useLoaderData } from "react-router"

const AppodLauncher = () => {
  const {appod} = useLoaderData() as LandingPageNewsAppodHubble

  if(!appod){
    return <>Probleme here...</>
  }

  const {date , media_type , title , url} = appod
  return (
    <article  className="w-full py-12">
      <div className="align-element h-full grid gap-4 lg:grid-cols-2">
        <div className="">
        <p className="text-2xl ">Today </p>
        <p className="my-4 text-4xl font-bold">NASA'S Astro picture of the day</p>
        <p className="text-2xl">{title}</p>
        <p className="">{date.split('-').reverse().join('-')}</p>
        <div className="mt-8 flex gap-2">
        <p className="">
          Browse Archives
        </p>
        <Link to={"appod"}>
        <CircleArrowRight color="black" className="transition-all hover:scale-150"/>
          </Link>
        </div>
       
        </div>
        
      {media_type === "video" ? <iframe className="rounded-xl min-h-[400px]" height={"100%"} width={'100%'} src={url} ></iframe> : 
      <img src={url} alt={`${title}-img`} className="rounded-xl"/>}
      </div>
    </article>
  )
}

export default AppodLauncher