import { AppodType } from "@/utils/types"
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"


type AppodPlayerType = {
    appod : AppodType;
    day : number;
    setDay : React.Dispatch<React.SetStateAction<number>>;
    isLoading : boolean
}

const AppodPlayer = ({appod , day , setDay , isLoading} :AppodPlayerType) => {
    const {date , explanation , media_type   , title , url} = appod
    const previousHandler = () => {
        setDay(state => {
            return state +1
        })
    }
    const nextHandler = () => {
        setDay(state => {
            if(state < 1){
                return 0
            }
            return state -1
        })
    }

  return (
    <>
    <div className="w-full mx-auto flex justify-between items-center" >
        <button onClick={previousHandler} className="mx-4  ">
            <CircleArrowLeft size={36} className='hover:scale-110 transition-all ' />
        </button>
        {!isLoading ? (        <div className="h-[400px] w-full">
            {media_type=== "video" ? <iframe height="100%" width="100%" src={url} ></iframe> 
            : 
            <img src={url} alt={`apod-${title}`} className="h-full rounded-lg object-cover w-full" />  }
        </div>) : <div className="h-[400px] w-full grid place-content-center"> 
        <Skeleton className="h-[400px]  w-[400px]" />
        </div>  }

        <button onClick={nextHandler}className="mx-4" disabled={day===0}>
            <CircleArrowRight size={36} color={`${day===0 ? "gray" : "black"}`}  className={`${day===0 ? "gray" : "hover:scale-110 transition-all"}`}/>
        </button>
    </div>
    <div className="capitalize text-center text-2xl" >{date}</div>
    <div className="mx-auto w-full my-8 flex flex-col gap-2 " >
        <p className="capitalize text-2xl text-center mb-2">{title}</p>
        <p className="capitalize text-center p-5">{explanation}</p>
        <p className="capitalize text-right p-5">{date}</p>

    </div>
    
    </>
  )
}

export default AppodPlayer