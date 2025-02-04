import { CardsGrid, RelatedNews, Title } from "@/components"
import WebTelescopSummary from "@/components/WebTelescopSummary"
import { jwstCustomFetch, snapiCustomFetch } from "@/utils/custom-fetch"
import { News, NewsResponse, WebbImage, WebbImageResponse, WebbNewsAndImagery } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router-dom"


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
  console.log(error)
  return null 
}
}


const Webb = () => {
  const {news , imagery} = useLoaderData() as WebbNewsAndImagery
  return (
    <section className="section">
      <Title text="James Web Telescope"/>
      {news && <RelatedNews news={news} />}
      <Title text="In Brief"/>
      <WebTelescopSummary/>
      <Title text="Recent Imagery"/>
{imagery && <CardsGrid objects={imagery} mode="Imagery"/>}
    </section>
  )
}

export default Webb