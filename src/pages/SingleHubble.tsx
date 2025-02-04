import { Title } from '@/components';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { datastroCustomFetch } from '@/utils/custom-fetch';
import { HubbleImages, HubbleImagesResponse } from '@/utils/types';
import { CircleArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';

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
    const { photo_date_taken , album_name_tags , photo_description , photo_title , photo_url_m , photo_license } = useLoaderData() as HubbleImages
    const nav = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <section className='section'>
<CircleArrowLeft className='cursor-pointer' onClick={() => nav(-1)}/>
        <Title text='Hubble telescope photo' />
        <Card>
            <CardHeader>
                <CardTitle className='flex justify-between text-2xl'>
                    <div className="">{photo_title} | {album_name_tags}</div>
                    <div className="">
                        <p className="">
                            Taken : {photo_date_taken}
                        </p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img className='w-full h-full rounded-lg' src={photo_url_m.url} alt={`${photo_title}-image`}/>
                <p className="mt-4 text-center">{photo_description}</p>
            </CardContent>
            <CardFooter className="flex justify-center text-center">- {photo_license} -</CardFooter>
        </Card>
    </section>
  )
}

export default SingleHubble