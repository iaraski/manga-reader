export interface MangaCardProps{
    id: number;
    type: string,
    image: string,
    title: string,
    link: string,
    genre: string,
    progress: number,
    createdDate: number,
    numChapters: number,
    description?: string,
    status?: string,


    assessment:number,
    views:number,
    likes:number,
    tags: string[]

}