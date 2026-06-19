
import NewsLauncherHeader from './NewsLauncherHeader'
import NewsLauncherSquaredCards from './NewsLauncherSquaredCards'
import { useLoaderData } from 'react-router'
import { LandingPageNewsAppodHubble } from '@/utils/types'
import { NewsLauncherBubbleCards } from '.'

const NewsLauncher = () => {
 const {news} =  useLoaderData() as LandingPageNewsAppodHubble
 const featuredNews = news?.slice(0, 4) ?? []
 const bubbleNews = news?.slice(4, 8) ?? []

 
  return (
    <article className='w-full py-12'>
      <div className="align-element h-full">
        <NewsLauncherHeader/>
       { featuredNews.length > 0 && <NewsLauncherSquaredCards news={featuredNews}/>}
       { bubbleNews.length > 0 && <NewsLauncherBubbleCards news={bubbleNews}/>}
        
      </div>
    </article>
  )
}

export default NewsLauncher
