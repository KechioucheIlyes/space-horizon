import { CardsGrid, Filters, OverView, Title } from "@/components"
import { datastroCustomFetch } from "@/utils/custom-fetch"
import { FilterParams, HubbleImages, HubbleImagesResponse, HubbleImagesResponseWithParams } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router-dom"



const hubbleParams = {
  order_by:'photo_date_taken desc',
  limit : 24
}

export const hubblePageLoader:LoaderFunction = async({request}) :Promise<HubbleImagesResponseWithParams | null>  => {
  try {
      const params:FilterParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
    
    const formattedParams = {
      where : params.term ? `photo_title like "${params.term}"` : '',
      ...hubbleParams
    }
    const resp = await datastroCustomFetch.get<HubbleImagesResponse>("" , {params :formattedParams })

    return  {response : resp.data , params }

  } catch (error) {
    console.log('error' , error)
    return null
  }
}

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponseWithParams
  const {response , params} =data
  console.log(data);
  
  return (
    <div className="section">
      <Title text="Hubble telescope photos"/>
      <Filters term={params.term} mode="hubble" key={params.term}/>
      <OverView objects={response} />
      <CardsGrid objects={response} mode="hubble-page" />
    </div>
  )
}

export default Hubble