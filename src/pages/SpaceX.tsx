import { CardsGrid, RelatedNews, Title } from "@/components"
import { snapiCustomFetch, spacexCustomFetch } from "@/utils/custom-fetch"
import { News, NewsResponse, Rocket, SpaceXNewsAndRockets } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router"

const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 9,
  ordering : "-published_at",
  summary_contains : "spacex"
}
const starShipUrl ="rockets/starship"
const falcon9Url ="rockets/falcon9"
const falconHeavyUrl ="rockets/falconheavy"
const rocketsUrls = [
  starShipUrl,
  falcon9Url,
  falconHeavyUrl
]

export const newsFetch = async ():Promise<News[] | null>=> {
  try {
    const resp = await snapiCustomFetch.get<NewsResponse>('' , {params : newParams})
    return resp.data.results
  } catch (error) {
    console.log(error);
    return null
    
  }
}
export const rocketFetch = async (rocketUrl : string) : Promise<Rocket | null>=> {
  try {
    const resp = await spacexCustomFetch.get<Rocket>(rocketUrl)

    return resp.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}
export const rocketsFetch = async ():Promise<(Rocket | null)[] | null> => {
  try {
    const resp : (Rocket | null)[]= await Promise.all(rocketsUrls.map(url => rocketFetch(url)))
    console.log(resp);
    return resp
  } catch (error) {
    console.log(error);
    return null
    
  }
}


export const spaceXPageLoader:LoaderFunction = async ():Promise<SpaceXNewsAndRockets | null> => {
  try {
    const [news , rockets] = await Promise.all([newsFetch() , rocketsFetch()])
    return {news , rockets} 
  } catch (error) {
    console.log(error);
    return null
    
  }
}
const SpaceX = () => {

const {news, rockets} = useLoaderData() as SpaceXNewsAndRockets
  return (
    <section className="section" >
      {news && <RelatedNews news={news}/>}
      <Title text="Rockets"></Title>
      {rockets && <CardsGrid objects={rockets} mode="rockets"/>}
    </section>
  )
}

export default SpaceX