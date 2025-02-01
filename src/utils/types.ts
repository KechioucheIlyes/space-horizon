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