export type Surface = 'Hard' | 'Clay' | 'Grass' | 'Synthetic'


export type Court = {
id: string
name: string
city: string
state?: string
surface: Surface
courtsCount: number
avgRating: number
thumbnail: string
coords: { lat: number; lng: number }
}


export type Review = {
id: string
courtId: string
author: string
rating: number
comment: string
createdAt: string
}