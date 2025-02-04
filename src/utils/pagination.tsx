
type BuildUrlType = {
    page : number;
    pathname:string;
    search : string
}

export const buildUrl = ({page , pathname ,search }:BuildUrlType) :string=> {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", page.toString())
    const url =`${pathname}?${searchParams.toString()}`

    return url
}


type BuildUrlPrevNextType = {
    page : number;
    pathname:string;
    search : string;
    last : number
}

export const buildPrevAndNextUrls = ({page , pathname , search , last}:BuildUrlPrevNextType) :{prevUrl:string , nextUrl:string} => {

    let prevPage = page -1 
    let nextPage = page +1 
    if(prevPage<1){
        prevPage = last 
    }
    if(nextPage>=last){
        nextPage = 1 
    }
    const prevUrl = buildUrl({page:prevPage ,pathname, search})
    const nextUrl = buildUrl ({page : nextPage , pathname , search})

    return {prevUrl , nextUrl}
}