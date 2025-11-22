import React, { useEffect, useState } from 'react';
import './LeafCursor.css';

function LeafCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, input, textarea, select, label, img')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', checkHover);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', checkHover);
    };
  }, []);

  return (
    <div
      className={`leaf-cursor ${hovering ? 'cursor-hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default LeafCursor;
