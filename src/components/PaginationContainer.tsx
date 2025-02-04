import { buildPrevAndNextUrls, buildUrl } from '@/utils/pagination'
import { HubbleImagesResponseWithParams, NewsResponseWithParams } from '@/utils/types'
import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

const PaginationContainer = () => {
    // console.log(buildUrl({  page:7,pathname:'/news', search:'?term=hubble'}));
    const {response} = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams
     const {pathname , search} = useLocation()

     const searchParams = new URLSearchParams(search)

     const pageFromUrl:(string | null) = searchParams.get("page")
     const objectPerPage = 25
     const firstPage = 1 

     let activePage : number

     if(!pageFromUrl){
        activePage=1
     }else{
        activePage= parseFloat(pageFromUrl)
     }

     let totalObject :number 

     if('total_count' in response){
        totalObject= response.total_count
     }else{
        totalObject = response.count
     }

     let lastPage : number

     if(totalObject===0){
        lastPage =0
     }else if (totalObject % objectPerPage){
        lastPage = totalObject / objectPerPage
     }else {
        lastPage = Math.floor(totalObject / objectPerPage) +1
     }

     console.log("location",location)
  return (
    <div>PaginationContainer</div>
  )
}

export default PaginationContainer