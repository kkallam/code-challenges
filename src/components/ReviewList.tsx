import React from 'react';
import type { Review } from '../types';


export default function ReviewList({ reviews }: { reviews: Review[] }) {
if (reviews.length === 0) return <div className="p-3 text-muted">No reviews yet — be the first!</div>
return (
<div className="list-group mt-2">
{reviews.map(r => (
<div key={r.id} className="list-group-item">
<div className="d-flex justify-content-between align-items-start">
<div>
<div className="fw-semibold">{r.author || 'Anonymous'}</div>
<div className="small-muted">{new Date(r.createdAt).toLocaleDateString()}</div>
</div>
<div className="text-end ms-2">{Array.from({ length: r.rating }).map((_,i)=> '⭐')}</div>
</div>
<p className="mb-0 mt-2">{r.comment}</p>
</div>
))}
</div>
)
}