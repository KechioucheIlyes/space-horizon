import React from 'react'
import NewsLauncherHeader from './NewsLauncherHeader'
import NewsLauncherSquaredCards from './NewsLauncherSquaredCards'
import { useLoaderData } from 'react-router'
import { LandingPageNewsAppodHubble } from '@/utils/types'
import { NewsLauncherBubbleCards } from '.'

const NewsLauncher = () => {
 const {news} =  useLoaderData() as LandingPageNewsAppodHubble

 
  return (
    <article className='w-full py-12'>
      <div className="align-element h-full">
        <NewsLauncherHeader/>
       { news && <NewsLauncherSquaredCards news={news}/>}
       { news && <NewsLauncherBubbleCards news={news}/>}
        
      </div>
    </article>
  )
}

export default NewsLauncher