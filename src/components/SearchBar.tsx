import React from 'react'
import type { Surface } from '../types'


export default function SearchBar({
query, setQuery, surfaceFilter, setSurfaceFilter, minRating, setMinRating
}: {
query: string
setQuery: (s: string) => void
surfaceFilter: Surface | 'All'
setSurfaceFilter: (s: Surface | 'All') => void
minRating: number
setMinRating: (n: number) => void
}) {
return (
<div className="mb-3">
<div className="input-group mb-2">
<input value={query} onChange={(e) => setQuery(e.target.value)} className="form-control form-control-lg" placeholder="Search courts or city" />
<button className="btn btn-outline-secondary" onClick={() => { setQuery(''); setSurfaceFilter('All'); setMinRating(0) }}>Reset</button>
</div>


<div className="d-flex gap-2">
<select className="form-select form-select-sm" value={surfaceFilter} onChange={(e) => setSurfaceFilter(e.target.value as Surface | 'All')}>
<option value="All">All surfaces</option>
<option value="Hard">Hard</option>
<option value="Clay">Clay</option>
<option value="Grass">Grass</option>
<option value="Synthetic">Synthetic</option>
</select>


<select className="form-select form-select-sm" value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
<option value={0}>Any rating</option>
<option value={3}>≥ 3.0</option>
<option value={4}>≥ 4.0</option>
</select>


<select className="form-select form-select-sm" value={''} onChange={() => { /* placeholder for sort if needed */ }}>
<option value="">Sort</option>
</select>
</div>
</div>
)
}