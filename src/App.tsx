import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import { generateMockCourts } from './data/mockCourts'
import type { Court, Review } from './types'
import { loadReviews, saveReviews } from './utils/storage'


export default function App() {
const [page, setPage] = useState<'list'|'detail'>('list')
const [selectedCourtId, setSelectedCourtId] = useState<string | null>(null)
const [courts] = useState<Court[]>(() => generateMockCourts(100))
const [reviews, setReviews] = useState<Review[]>(() => loadReviews())


useEffect(() => saveReviews(reviews), [reviews])


function openDetail(id: string) {
setSelectedCourtId(id)
setPage('detail')
}
function backToList() { setPage('list'); setSelectedCourtId(null) }


const selectedCourt = useMemo(() => courts.find(c => c.id === selectedCourtId) || courts[0], [courts, selectedCourtId])
const courtReviews = reviews.filter(r => r.courtId === selectedCourtId)


function addReview(author: string, rating: number, comment: string) {
const newReview: Review = { id: `rev_${Math.random().toString(36).slice(2,9)}`, courtId: selectedCourtId || selectedCourt.id, author, rating, comment, createdAt: new Date().toISOString() }
setReviews(r => [newReview, ...r])
}


return (
<div className="container-mobile">
<Header onBack={page === 'detail' ? backToList : undefined} title={page === 'list' ? 'Tennis Courts' : selectedCourt?.name} />


{page === 'list' && <ListPage onOpen={openDetail} />}


{page === 'detail' && selectedCourt && (
<DetailPage court={selectedCourt} reviews={courtReviews} onAddReview={addReview} />
)}


<div className="text-center small-muted mt-3">Built for demo — mobile-first. Data saved in localStorage.</div>
</div>
)
}