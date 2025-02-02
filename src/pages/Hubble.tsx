import { CardsGrid, OverView, Title } from "@/components"
import { datastroCustomFetch } from "@/utils/custom-fetch"
import { HubbleImages, HubbleImagesResponse } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router-dom"



const hubbleParams = {
  order_by:'photo_date_taken desc',
  limit : 24
}

export const hubblePageLoader:LoaderFunction = async({}) :Promise<HubbleImagesResponse | null>  => {
  try {
    const formattedParams = {
      ...hubbleParams
    }
    const resp = await datastroCustomFetch.get<HubbleImagesResponse>("" , {params :formattedParams })

    return  resp.data

  } catch (error) {
    console.log('error' , error)
    return null
  }
}

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponse
  console.log(data);
  
  return (
    <div className="section">
      <Title text="Hubble telescope photos"/>
      <OverView objects={data} />
      <CardsGrid objects={data} mode="hubble-page" />
    </div>
  )
}

export default Hubble