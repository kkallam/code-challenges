import React from 'react';


export default function Header({ title = 'Tennis Courts', onBack }: { title?: string; onBack?: () => void }) {
return (
<div className="d-flex align-items-center mb-3">
{onBack ? (
<button className="btn btn-light me-2" onClick={onBack} aria-label="back">←</button>
) : (
<div className="me-2 rounded-3 bg-success text-white d-flex align-items-center justify-content-center" style={{ width: 44, height: 44, fontWeight: 700 }}>T</div>
)}


<div>
<h5 className="mb-0">{title}</h5>
<div className="small-muted">Find courts, read & leave reviews</div>
</div>
</div>
)
}