import { News } from '@/utils/types'
import  { ReactNode } from 'react'
import NewPageCard from './NewPageCard'

const CardsGrid = ({objects , mode} : {objects: Array<News> , mode:string}): ReactNode => {
  return (
    <div className='grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]'>
        {objects.map((object, index) => 

            <NewPageCard news={object} key={index}/>
        
        )}
    </div>
  )
}

export default CardsGrid