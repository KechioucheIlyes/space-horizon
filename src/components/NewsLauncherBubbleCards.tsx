import React from 'react'
import { News } from '../utils/types';
import NewsBubble from './NewsBubble';

const NewsLauncherBubbleCards = ({news} : {news : News[]}) => {

  return (
    <div className='grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <NewsBubble news={news[4]}/>
      <NewsBubble  news={news[5]}/>
      <NewsBubble  news={news[6]}/>
      <NewsBubble  news={news[7]}/>
    </div>
  )
}

export default NewsLauncherBubbleCards