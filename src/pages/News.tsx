import { CardsGrid, Filters, OverView, Title } from "@/components"
import { snapiCustomFetch } from "@/utils/custom-fetch"
import { FilterParams, NewsResponse, NewsResponseWithParams } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router"

const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 20,
  ordering : "-published_at"
}
export const newsPageLoader:LoaderFunction = async({request}):Promise<NewsResponseWithParams| null> => {
try {
  const params:FilterParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const formattedParams = {
    search: params.term ? params.term : "",
    ...newParams
  }
  const resp = await snapiCustomFetch.get<NewsResponse>("" , {
    params : formattedParams
  })
  return {response : resp.data , params}
} catch (error) {
  console.log(error);
  return null
  
}
}
const News = () => {
  const data =useLoaderData() as NewsResponseWithParams

  const {response , params} =data
  console.log(data);
  
  return (
    <section className="section">
      <Title text="All news"/>
      <Filters term={params.term} mode="news" key={params.term}/>
      <OverView objects={data}/>
      <CardsGrid objects={response} mode="news-page" />
      <PaginationContainer/>
    </section>
  )
}

export default News