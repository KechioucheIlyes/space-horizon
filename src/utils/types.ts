export type News = {
        id: number,
        title: string
        authors: Author[];
        url: string;
        image_url: string;
        news_site: string;
        summary: string;
        published_at: string;
        updated_at: string;
        featured: boolean,
        launches: string[],
        events: string[]
}


export type Author = {
    name : string;
    socials: string[];
}


export type NewsResponse = {
    count: number;
    next : string;
    previous : string;
    results : News[]
}
export type FilterParams = {
    term?: string
}


export type NewsResponseWithParams = {
    response : NewsResponse ;
    params : FilterParams
}


export type HubbleImagesResponse = {
    total_count : number ;
    results : HubbleImages[]
}

export type HubbleImages = {
    photo_id:number;
    photo_title:string;
    photo_description:string;
    photo_url_m:{
        thumbnail : boolean;
        filename : string;
        format : string;
        width : number;
        mimetype : string;
        id : string;
        last_synchronized : string;
        height : number;
        url : string;
    };
    photo_date_taken:string;
    photo_height:string;
    photo_width:string;
    photo_license:string;
    album_id:string;
    album_name_tags:string;
    url:string;
    tags:string;
}

export type HubbleImagesResponseWithParams = {
    response : HubbleImagesResponse ;
    params : FilterParams;
}

"kHZGCYP8YmyVqelB735gbjqw0cOdN6JjJXAx46As"

export type AppodType = {
    date :string;
    explanation :string;
    hdurl :string;
    media_type :string;
    service_version :string;
    title :string;
    url :string;
}


