import { datastroCustomFetch } from '@/utils/custom-fetch';
import { HubbleImages, HubbleImagesResponse } from '@/utils/types';
import { LoaderFunction } from 'react-router-dom';

export const singleHubblePageLoader:LoaderFunction = async({params}) : Promise<HubbleImages | null>=> {
try {
    const formattedParams = {where : params.id ? `photo_id like "${params.id}"`:`` }
    const resp = await datastroCustomFetch.get<HubbleImagesResponse>('' , {params :formattedParams})
    return resp.data.results[0]
} catch (error) {
    console.log(error);
    return null
    
}
}

const SingleHubble = () => {
  return (
    <div>SingleHubble</div>
  )
}

export default SingleHubble