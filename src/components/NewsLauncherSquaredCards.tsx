import { News } from "@/utils/types"
import NewsCard from "./NewsCard"

const NewsLauncherSquaredCards = ({news} : {news : News[]}) => {
  return (
    <div className="mt-6 p-2 grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:h-[600px] gap-2">
        {news.map((newsItem, index) => (
          <NewsCard
            key={newsItem.id}
            news={newsItem}
            classname={index === 0 ? "md:col-span-2 md:row-span-2" : index === 1 ? "md:col-span-1 md:row-span-2" : ""}
          />
        ))}
    </div>
  )
}

export default NewsLauncherSquaredCards
