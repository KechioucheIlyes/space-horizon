import { AppodLauncher, HubbleLauncher, NewsLauncher, SpaceXLauncher, WebbLauncher } from "@/components";
import { apodNasaCustomFetch, datastroCustomFetch, snapiCustomFetch } from "@/utils/custom-fetch"
import { AppodType, HubbleImages, HubbleImagesResponse, LandingPageNewsAppodHubble, News, NewsResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router"
const newsParams = { ordering: "-published_at" };

const hubbleParams = {
  order_by  : 'photo_date_taken desc',
  limit:12
}

export const newsFetch = async ():Promise<News[] | null> => {
  try {
    const resp = await snapiCustomFetch.get<NewsResponse>('' , {params : newsParams})
    return resp.data.results
  } catch (error) {
    console.log(error);
    return null
    
  }
}
export const appodFetch = async ():Promise<AppodType | null> => {
  try {
    const resp = await apodNasaCustomFetch.get<AppodType>('')
    return resp.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}
export const hubbleFetch = async ():Promise<HubbleImages[] | null> => {
  try {
    const resp = await datastroCustomFetch.get<HubbleImagesResponse>('' , {params : hubbleParams})
    return resp.data.results
  } catch (error) {
    console.log(error);
    return null
    
  }
}


export const landingPageLoader : LoaderFunction = async() : Promise<LandingPageNewsAppodHubble | null>=> {
  try {
    const [news , appod , hubble] = await Promise.all([newsFetch() , appodFetch() , hubbleFetch()])

    return {news , appod , hubble}
  } catch (error) {
    console.log(error);
    return null
    
  }
}
const Landing = () => {
  const data = useLoaderData() as LandingPageNewsAppodHubble
  console.log("data", data);
  
  return (
    <section>
      <NewsLauncher/>
      <SpaceXLauncher/>
      <AppodLauncher/>
      <WebbLauncher/>
      <HubbleLauncher/>
    </section>
  )
}

export default Landing