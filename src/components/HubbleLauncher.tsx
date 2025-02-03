import { LandingPageNewsAppodHubble } from "@/utils/types";
import { Link, useLoaderData } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import CardsGrid from "./CardsGrid";


const HubbleLauncher = () => {
  const {hubble} = useLoaderData() as LandingPageNewsAppodHubble
  console.log("data", hubble);

  if(!hubble){
    return <>Probleme here...</>
  }
  return (
    <article className="align-element w-full my-6 ">
      <div className="flex justify-between items-center">
      <Title text="Hubble Photo's"/>
      <div className="flex items-center">
        <p className="font-bold ml-auto mr-2">
            More Photos
        </p>
        <Link to={'hubble'}>
        <CirclePlay color="black" className="transition-all hover:scale-150"/>
        </Link>
      </div>
      </div>
      <CardsGrid objects={hubble} mode="hubble-page"/>
    </article>
  )
}

export default HubbleLauncher