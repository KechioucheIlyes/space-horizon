import { HubbleImages } from '@/utils/types'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader, CardTitle  , } from './ui/card'
import { CircleArrowRight } from 'lucide-react'

const HubbleCard = ({image} : {image : HubbleImages}) => {
    const {photo_id ,photo_date_taken , photo_title , photo_url_m  } = image
    const {url} = photo_url_m
  return (
    <Link to={`/hubble/${photo_id}`}>
        <Card className='slider-card relative min-h-[400px]  rounded-lg'>
        <CardHeader className='absolute top-2 left-2 z-10 text-zinc-100'>
            <CardTitle>
                {photo_title}
            </CardTitle>
        </CardHeader>
        <CardContent className='absolute h-full  w-full p-0 top-0 left-0 '>
            <img src={url} className='h-full w-full object-cover rounded-lg' alt={`${photo_title}-hubble-pic`}/>
        </CardContent>
        <CardFooter className='absolute flex gap-3 bottom-2  text-zinc-300'>
<p>Taken : {photo_date_taken}</p>
        <CircleArrowRight color='white' 
        className='hover:scale-150 transition-all cursor-pointer '
        />
        </CardFooter>
        </Card>
    </Link>
  )
}

export default HubbleCard