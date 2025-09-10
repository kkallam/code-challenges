import type { Court, Surface } from '../types'


const surfaces: Surface[] = ['Hard', 'Clay', 'Grass', 'Synthetic']


function pick<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)] }
function rand(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }


export function generateMockCourts(n = 100): Court[] {
const cities = [
'Austin','Dallas','Houston','San Antonio','Seattle','Portland','Miami','Orlando','New York','Boston',
'Chicago','Los Angeles','San Diego','Phoenix','Denver','Minneapolis','Atlanta','Raleigh','Philadelphia','Detroit'
]
const names = [
'Pinecrest Tennis Center','Riverside Courts','Lakeside Club','Cedar Park Tennis','Maplewood Courts','Sunset Tennis Park',
'Central City Courts','Parkview Tennis','Harborfront Courts','Valley Tennis Complex','Greenway Courts','Upper East Courts'
]


return Array.from({ length: n }).map((_, i) => {
const city = pick(cities)
const name = `${pick(names)} ${i + 1}`
const surface = pick(surfaces)
const courtsCount = rand(1, 12)
const avgRating = parseFloat((Math.random() * 4 + 1).toFixed(1))
const thumb = `https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60&ixid=${Math.abs(i*12345)}`
return {
id: `court_${i + 1}`,
name,
city,
state: '',
surface,
courtsCount,
avgRating,
thumbnail: thumb,
coords: { lat: 30 + Math.random() * 10, lng: -100 + Math.random() * 20 }
} as Court
})
}