import React from 'react'
import type { Court, Review } from '../types'
import StarRating from '../components/StarRating';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';


export default function DetailPage({ court, reviews, onAddReview } : { court: Court, reviews: Review[], onAddReview: (author: string, rating: number, comment: string)=>void }) {
return (
<div>
<div className="card mb-3">
<img src={court.thumbnail} className="card-img-top" alt={court.name} />
<div className="card-body">
<div className="d-flex justify-content-between">
<div>
<h5 className="card-title mb-1">{court.name}</h5>
<div className="small-muted">{court.city}</div>
</div>
<div className="text-end">
<StarRating value={court.avgRating} />
<div className="small-muted">{court.surface} • {court.courtsCount} courts</div>
</div>
</div>
</div>
</div>


<h6>Reviews</h6>
<ReviewList reviews={reviews} />


<h6 className="mt-3">Leave a review</h6>
<ReviewForm onSubmit={onAddReview} />
</div>
)
}