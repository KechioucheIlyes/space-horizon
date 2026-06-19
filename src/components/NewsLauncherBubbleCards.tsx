import { News } from '../utils/types';
import NewsBubble from './NewsBubble';

const NewsLauncherBubbleCards = ({news} : {news : News[]}) => {

  return (
    <div className='grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {news.map((newsItem) => (
        <NewsBubble key={newsItem.id} news={newsItem}/>
      ))}
    </div>
  )
}

export default NewsLauncherBubbleCards
