import { buildPrevAndNextUrls, buildUrl } from '@/utils/pagination'
import { HubbleImagesResponseWithParams, NewsResponseWithParams } from '@/utils/types'
import React, { ReactNode } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

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
     }else if (totalObject % objectPerPage === 0){
        lastPage = totalObject / objectPerPage
     }else {
        lastPage = Math.floor(totalObject / objectPerPage) +1
     }

     const {prevUrl , nextUrl} = buildPrevAndNextUrls({page:activePage , pathname , search ,last:lastPage})  
    

const buildBtn = ({page , isActive} : {page : number , isActive:boolean}) => {
    const url = buildUrl({page , pathname , search } )
    return <PaginationItem key={page} >

        <PaginationLink to={url} isActive={isActive} size={'default'}>
            
            {page}
        </PaginationLink>

    </PaginationItem>
}

    const BuildContent = () => {
        let pages  = []

        pages.push(buildBtn({page:firstPage , isActive:activePage===firstPage }))
        if(activePage !== firstPage && activePage !== lastPage) {
                    pages.push(buildBtn({page:activePage , isActive:true }))
        }
        pages.push(buildBtn({page:lastPage , isActive:activePage===lastPage }))
        return pages
    }

    if (lastPage < 2){
        return null
    }
     
  return (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious to={prevUrl} size={'default'}></PaginationPrevious>
            </PaginationItem>
            {BuildContent()}
            <PaginationItem>
                <PaginationNext to={nextUrl} size={'default'}></PaginationNext>
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default PaginationContainer