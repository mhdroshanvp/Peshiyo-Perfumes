import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const updatePosition = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setPosition(cursorRef.current);
    };

    const tick = () => {
      const target = cursorRef.current;
      const prev = followerRef.current;
      followerRef.current = {
        x: prev.x + (target.x - prev.x) * 0.15,
        y: prev.y + (target.y - prev.y) * 0.15,
      };
      setFollowerPosition(followerRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', updatePosition);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hover-target')
      ) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-follower"
        style={{ left: `${followerPosition.x}px`, top: `${followerPosition.y}px` }}
      />
    </>
  );
};

export default Cursor;
