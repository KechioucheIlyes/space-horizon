import { jwstCustomFetch, snapiCustomFetch } from "@/utils/custom-fetch"
import { News, NewsResponse, WebbImage, WebbImageResponse, WebbNewsAndImagery } from "@/utils/types"
import { LoaderFunction } from "react-router-dom"


const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 9,
  ordering : "-published_at",
  summary_contains : "webb"
}

const imagesParams = {
  page:1,
  perPage : 4,

}

export const newsFetch = async():Promise<News[] | null> => {
try {
  const resp = await snapiCustomFetch.get<NewsResponse>('' , {params : newParams })

  return resp.data.results
} catch (error) {
  console.log(error);
  return null
  
}
}
export const imageryFetch = async(): Promise <WebbImage[] |null> => {
try {
  const resp = await jwstCustomFetch.get<WebbImageResponse>('' , {params : imagesParams} )

  return resp.data.body
} catch (error) {
  console.log(error);
  return null
  
}
}


export const webbPageLoader:LoaderFunction = async (): Promise<WebbNewsAndImagery | null> => {
try {
  const [news ,imagery] = await Promise.all([newsFetch() , imageryFetch()])
  return {news , imagery}
} catch (error) {
  return null 
}
}


const Webb = () => {
  return (
    <div>Webb</div>
  )
}

export default Webb