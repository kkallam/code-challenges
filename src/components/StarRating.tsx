import React from 'react';


export default function StarRow({ value }: { value: number }) {
const full = Math.floor(value)
return (
<div className="d-flex align-items-center">
{Array.from({ length: 5 }).map((_, i) => (
<svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < full ? 'currentColor' : 'none'} stroke="currentColor" style={{ marginRight: 4, color: i < full ? '#f6c84c' : '#dee2e6' }}>
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.286a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.286c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.286a1 1 0 00-.364-1.118L2.98 8.713c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.286z" />
</svg>
))}
<small className="text-muted">{value.toFixed(1)}</small>
</div>
)
}