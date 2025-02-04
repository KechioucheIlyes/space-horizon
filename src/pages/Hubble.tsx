import { CardsGrid, Filters, OverView, PaginationContainer, Title } from "@/components"
import { datastroCustomFetch } from "@/utils/custom-fetch"
import { FilterParams, HubbleImagesResponse, HubbleImagesResponseWithParams } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router-dom"



const hubbleParams = {
  order_by:'photo_date_taken desc',
  limit : 25
}

export const hubblePageLoader:LoaderFunction = async({request}) :Promise<HubbleImagesResponseWithParams | null>  => {
  try {
      const params:FilterParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
    
    const formattedParams = {
      where : params.term ? `photo_title like "${params.term}"` : '',
      offset : params.page ? 25 * (parseFloat( params.page) -1) : 0,
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

  
  return (
    <div className="section">
      <Title text="Hubble telescope photos"/>
      <Filters term={params.term} mode="hubble" key={params.term}/>
      <OverView objects={response} />
      <CardsGrid objects={response.results} mode="hubble-page" />
      <PaginationContainer/>
    </div>
  )
}

export default Hubble