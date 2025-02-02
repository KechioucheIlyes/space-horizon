import {  HubbleImages, HubbleImagesResponse,  News,  NewsResponse } from '@/utils/types'
import  { ReactNode } from 'react'
import NewPageCard from './NewPageCard'
import HubbleCard from './HubbleCard'

const CardsGrid = ({objects , mode} : {objects: NewsResponse | HubbleImagesResponse , mode:string}): ReactNode => {
  
 if (mode==="hubble-page"){
  return <div className="mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{objects.results.map((object , index) => (
    <HubbleCard key={index} image={object as HubbleImages}/>
  ))}
    
    </div>
 }else if (mode==="news-page"){
  return (
    <div className='grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]'>
        {objects.results.map((object, index) => 

            <NewPageCard news={object as News} key={index}/>
        
        )}
    </div>
  )
 }

  
}

export default CardsGrid