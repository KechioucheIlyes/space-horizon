import { buildPrevAndNextUrls, buildUrl } from '@/utils/pagination'
import React from 'react'

const PaginationContainer = () => {
    // console.log(buildUrl({  page:7,pathname:'/news', search:'?term=hubble'}));
const {prevUrl , nextUrl} = buildPrevAndNextUrls({  page:7,pathname:'/news', search:'?term=hubble' })
     console.log(prevUrl);
     console.log(nextUrl);
     
  return (
    <div>PaginationContainer</div>
  )
}

export default PaginationContainer