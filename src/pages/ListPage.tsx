import React, { useMemo, useState } from 'react';
import type { Court } from '../types';
import { generateMockCourts } from '../data/mockCourts';
import SearchBar from '../components/SearchBar';
import CourtCard from '../components/CourtCard';

export default function ListPage({ onOpen } : { onOpen: (id: string) => void }) {
const [courts] = useState<Court[]>(() => generateMockCourts(100));
const [query, setQuery] = useState('');
const [surfaceFilter, setSurfaceFilter] = useState<'All' | any>('All');
const [minRating, setMinRating] = useState(0);
const PAGE_SIZE = 12;
const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);


const filtered = useMemo(() => {
const q = query.trim().toLowerCase()
return courts.filter(c => {
const matchesQuery = q ? c.name.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) : true
const matchesSurface = surfaceFilter === 'All' ? true : c.surface === surfaceFilter
const matchesRating = c.avgRating >= minRating
return matchesQuery && matchesSurface && matchesRating
}).sort((a,b)=> b.avgRating - a.avgRating)
}, [courts, query, surfaceFilter, minRating])


const visible = filtered.slice(0, visibleCount)


return (
<div>
<SearchBar query={query} setQuery={setQuery} surfaceFilter={surfaceFilter} setSurfaceFilter={setSurfaceFilter} minRating={minRating} setMinRating={setMinRating} />


<div className="row g-2">
{visible.map(c => (
<div key={c.id} className="col-6">
<CourtCard court={c} onOpen={() => onOpen(c.id)} />
</div>
))}
</div>


{visibleCount < filtered.length && (
<div className="d-flex justify-content-center mt-3">
<button className="btn btn-outline-secondary" onClick={() => setVisibleCount(v => Math.min(filtered.length, v + PAGE_SIZE))}>Load more ({filtered.length - visibleCount})</button>
</div>
)}


{filtered.length === 0 && <div className="text-center text-muted mt-3">No courts matched your search.</div>}
</div>
)
}