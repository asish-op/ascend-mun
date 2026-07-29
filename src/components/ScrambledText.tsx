'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ScrambledTextProps {
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: string;
  duration?: number;
  speed?: number;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  scrambleChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=',
  className = '',
  style = {},
  children,
  duration = 1.0,
  speed = 0.6
}) => {
  const [displayText, setDisplayText] = useState(children);
  const isHovered = useRef(false);
  const requestRef = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  const scramble = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp;
    const elapsed = (timestamp - startTime.current) / 1000;

    // Progression from 0 to 1
    const progress = Math.min(elapsed / duration, 1);

    const length = children.length;
    let result = '';

    for (let i = 0; i < length; i++) {
      // Determine if this character should be resolved
      const threshold = (i / length) * 0.8; // Resolve left-to-right slightly staggered
      if (progress > threshold + 0.2 || !isHovered.current) {
        result += children[i];
      } else {
        // Random scramble character
        const randomIndex = Math.floor(Math.random() * scrambleChars.length);
        result += scrambleChars[randomIndex];
      }
    }

    setDisplayText(result);

    if (progress < 1 && isHovered.current) {
      requestRef.current = requestAnimationFrame(scramble);
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    startTime.current = null;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(scramble);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    setDisplayText(children);
  };

  useEffect(() => {
    setDisplayText(children);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [children]);

  return (
    <span
      className={`font-mono inline-block cursor-default ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default ScrambledText;
