import {  HubbleImagesResponse, NewsResponse, NewsResponseWithParams } from '@/utils/types'
import { ReactNode } from 'react'


const OverView = ({objects} : {objects : NewsResponseWithParams | HubbleImagesResponse}) : ReactNode => {
  
    let number : number 
    if('total_count' in objects){
      number = objects.total_count
    }else{
      number = objects.response.count
    }
  

  return (
    <div className='my-6 text-xl'>{number} Matches</div>
  )
}

export default OverView