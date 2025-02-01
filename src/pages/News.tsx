import { snapiCustomFetch } from "@/utils/custom-fetch"
import { NewsResponse } from "@/utils/types"
import { LoaderFunction } from "react-router"

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
  return (
    <div>News</div>
  )
}

export default News