import type { Review } from '../types'


const REVIEWS_LS_KEY = 'tennis_reviews_v1'


export function loadReviews(): Review[] {
try {
const raw = localStorage.getItem(REVIEWS_LS_KEY)
if (!raw) return []
return JSON.parse(raw) as Review[]
} catch (e) {
console.error('Failed to load reviews', e)
return []
}
}


export function saveReviews(reviews: Review[]) {
try { localStorage.setItem(REVIEWS_LS_KEY, JSON.stringify(reviews)) }
catch (e) { console.error('Failed to save reviews', e) }
}