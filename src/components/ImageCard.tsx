import { WebbImage } from '@/utils/types'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

const ImageCard = ({image }: {image: WebbImage}) => {
    const {details , location} = image
    const {description , mission} =details
  return (
    <Card className='bg-muted'>
        <CardHeader>{mission}</CardHeader>
        <CardContent>
            <img src={location} alt={`${location}-image`} className='w-full rounded-lg'/>
        </CardContent>
        <CardFooter>
            <p>{description}</p>
        </CardFooter>
    </Card>
  )
}

export default ImageCard