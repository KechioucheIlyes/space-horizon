import { CardsGrid } from "@/components"
import { snapiCustomFetch } from "@/utils/custom-fetch"
import { NewsResponse } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router"

const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 20,
  ordering : "-published_at"
}
export const newsPageLoader:LoaderFunction = async():Promise<NewsResponse| null> => {
try {
  const formattedParams = {
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
  const {results} =useLoaderData() as NewsResponse
  console.log(results);
  
  return (
    <section className="section">
      <CardsGrid objects={results} mode="news-page" />
    </section>
  )
}

export default News