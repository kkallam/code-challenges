import React, { useState } from 'react';


export default function ReviewForm({ onSubmit }: { onSubmit: (author: string, rating: number, comment: string) => void }) {
const [author, setAuthor] = useState('')
const [rating, setRating] = useState(5)
const [comment, setComment] = useState('')


function handleSubmit(e?: React.FormEvent) {
e?.preventDefault()
if (!comment.trim()) return alert('Please add a comment.')
onSubmit(author.trim() || 'Anonymous', rating, comment.trim())
setAuthor(''); setRating(5); setComment('')
}


return (
<form onSubmit={handleSubmit} className="mt-3">
<div className="mb-2">
<input className="form-control" placeholder="Your name (optional)" value={author} onChange={(e)=>setAuthor(e.target.value)} />
</div>
<div className="mb-2 d-flex gap-2 align-items-center">
<label className="mb-0 small-muted">Rating</label>
<select className="form-select form-select-sm w-auto" value={rating} onChange={(e)=>setRating(Number(e.target.value))}>
{[5,4,3,2,1].map(v => <option key={v} value={v}>{v}</option>)}
</select>
</div>
<div className="mb-2">
<textarea className="form-control" placeholder="Share your experience" value={comment} onChange={(e)=>setComment(e.target.value)} />
</div>
<div className="d-flex justify-content-end">
<button className="btn btn-success btn-pill">Post review</button>
</div>
</form>
)
}