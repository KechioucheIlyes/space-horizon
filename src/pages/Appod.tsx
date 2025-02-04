import { AppodPlayer, Title } from "@/components"
import { apodNasaCustomFetch } from "@/utils/custom-fetch"
import { numberToDate } from "@/utils/function"
import { AppodType } from "@/utils/types"
import { useEffect, useState } from "react"
import { LoaderFunction, useLoaderData } from "react-router-dom"


export const appodPageLoader:LoaderFunction = async (): Promise<AppodType | null> => {
  try {

    const formattedParams = {

    }
    
    const resp = await apodNasaCustomFetch.get<AppodType>("" , {params : formattedParams})
    
    return resp.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}

const Appod = () => {
  const defualtAppod =  useLoaderData() as AppodType
  const [data , setData] = useState<AppodType>(defualtAppod)
  const [day , setDay] = useState<number>(0)
  const [loading , setLoading] = useState<boolean>(false)

const fetchAppod =async (day:number):Promise<void | null> => {
  setLoading(true)
  try {
    const params = {date : numberToDate(day)}
    const response = await apodNasaCustomFetch.get<AppodType>('', {params})
    setData(response.data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
    return null
    
  }
}

  useEffect(()=> {
    fetchAppod(day)
  }, [day])
  
  return (
    <section className="">
      <Title text="Nasa's Astronomy picture of the day"/>
      <AppodPlayer appod={data} day={day} setDay={setDay} isLoading={loading}/>
    
    
    </section>
  )
}

export default Appod