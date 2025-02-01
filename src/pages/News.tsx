import { CardsGrid, Filters, OverView, Title } from "@/components"
import { snapiCustomFetch } from "@/utils/custom-fetch"
import { NewsResponse } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router"

const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 20,
  ordering : "-published_at"
}
export const newsPageLoader:LoaderFunction = async({request}):Promise<NewsResponse| null> => {
try {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const formattedParams = {
    search: params.term ? params.term : "",
    ...newParams
  }
  const resp = await snapiCustomFetch.get<NewsResponse>("" , {
    params : formattedParams
  })
  return resp.data
} catch (error) {
  console.log(error);
  return null
  
}
}
const News = () => {
  const data =useLoaderData() as NewsResponse

  const {results} =data
  console.log(data);
  
  return (
    <section className="section">
      <Title text="All news"/>
      <Filters term="term" mode="news"/>
      <OverView objects={data}/>
      <CardsGrid objects={results} mode="news-page" />
    </section>
  )
}

export default News