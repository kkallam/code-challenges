import React from 'react';
import type { Court } from '../types';
import StarRow from './StarRating';


export default function CourtCard({ court, onOpen }: { court: Court; onOpen: () => void }) {
return (
<article className="card mb-3" style={{ cursor: 'pointer' }} onClick={onOpen}>
<img src={court.thumbnail} className="card-img-top" alt={court.name} />
<div className="card-body p-2">
<h6 className="card-title mb-1">{court.name}</h6>
<p className="mb-1 small-muted">{court.city}</p>
<div className="d-flex justify-content-between align-items-center mt-2">
<div className="small-muted">{court.surface} • {court.courtsCount}</div>
<StarRow value={court.avgRating} />
</div>
</div>
</article>
)
}