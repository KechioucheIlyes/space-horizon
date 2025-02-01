import {  NewsResponse } from '@/utils/types'
import { ReactNode } from 'react'


const OverView = ({objects} : {objects : NewsResponse}) : ReactNode => {
    const number : number = objects.count
  return (
    <div className='my-6 text-xl'>{number} Matches</div>
  )
}

export default OverView