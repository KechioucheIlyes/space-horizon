import {  NewsResponse, NewsResponseWithParams } from '@/utils/types'
import { ReactNode } from 'react'


const OverView = ({objects} : {objects : NewsResponseWithParams}) : ReactNode => {
    const number : number = objects.response.count
  return (
    <div className='my-6 text-xl'>{number} Matches</div>
  )
}

export default OverView