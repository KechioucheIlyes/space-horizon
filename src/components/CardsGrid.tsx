import {  HubbleImages, HubbleImagesResponse,  News,  NewsResponse, Rocket, WebbImage } from '@/utils/types'
import  { ReactNode } from 'react'
import NewPageCard from './NewPageCard'
import HubbleCard from './HubbleCard'
import ImageCard from './ImageCard'

const CardsGrid = ({objects , mode} : {objects: NewsResponse | HubbleImagesResponse | WebbImage[] | (Rocket | null)[] , mode:string}): ReactNode => {
  
 if (mode==="hubble-page"){
  return <div className="mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{(objects as HubbleImagesResponse).results.map((object , index) => (
    <HubbleCard key={index} image={object}/>
  ))}
    
    </div>
 }else if (mode==="news-page"){
  return (
    <div className='grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]'>
        {(objects as NewsResponse ).results.map((object, index) => 

            <NewPageCard news={object as News} key={index}/>
        
        )}
    </div>
  )
 }else if (mode === 'Imagery') {
  return <div className="grid gap-3 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
{(objects as WebbImage[]).map((object , index) => (
  <ImageCard image={object} key={index} />
))}
  </div>
 }else if (mode==='rockets') {
  return <div className="">
    {(objects as (Rocket | null)[]).map((object, index) => <div className="test min-h-[100px]"></div>)}
  </div>
 }

  
}

export default CardsGrid