import React, { useState, useEffect } from 'react';

const animations = [
  'swipe-up',
  'swipe-down',
  'swipe-left',
  'swipe-right',
  'click',
  'hold',
  'keyboard-cycle',
];

const GestureRing: React.FC = () => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => setAnimation(''), 1000); // Reset after 1s
      return () => clearTimeout(timer);
    }
  }, [animation]);

  return (
    <div className="gesture-ring">
      {animation && <div className={`gesture-indicator ${animation}`} />}
      {/* Temporary buttons to trigger animations */}
      <div style={{ position: 'absolute', top: '110%', left: 0, display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {animations.map((anim) => (
          <button key={anim} onClick={() => setAnimation(anim)}>
            {anim}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GestureRing;
