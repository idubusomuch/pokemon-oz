import React, { useState } from 'react';

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      flipped={flipped ? 'flip' : ''}
      className={`flip-img-container transform ${
        flipped ? 'rotate-y-180' : ''
      }`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}>
      <img src={front} />
      <img src={back} className="rotate-y-180" />
    </div>
  );
}
