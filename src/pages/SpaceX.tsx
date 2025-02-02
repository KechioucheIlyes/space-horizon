import { snapiCustomFetch, spacexCustomFetch } from "@/utils/custom-fetch"
import { LoaderFunction } from "react-router"

const newParams = {
  news_site_exclude:"SpacePolicyOnline.com",
  limit : 9,
  ordering : "-published_at",
  summary_contains : "spacex"
}

export const newsFetch = async ()=> {
  try {
    const resp = await snapiCustomFetch.get('' , {params : newParams})
    return resp.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}
export const rocketsFetch = async ()=> {
  try {
    const resp = await spacexCustomFetch.get('rockets/starship' )
    return resp.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}

export const spaceXPageLoader:LoaderFunction = async () => {
  try {
    const [news , rockets] = await Promise.all([newsFetch() , rocketsFetch()])
    return {news , rockets} 
  } catch (error) {
    console.log(error);
    return null
    
  }
}
const SpaceX = () => {
  return (
    <div>SpaceX</div>
  )
}

export default SpaceX