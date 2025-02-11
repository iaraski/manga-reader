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


    assessment:number,
    views:number,
    likes:number,
    tags: string[]

}
export interface SwiperCardTypeProps{
    cardType: "vertical-manga-card" | "horizontal-low-info-manga-card";
    width:number;
}