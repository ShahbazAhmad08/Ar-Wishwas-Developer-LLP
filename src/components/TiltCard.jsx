import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Professional 3D Perspective Tilt Card with Dynamic Specular Sheen
 * Used on Apple / Stripe / Awwwards websites for hyper-premium feel
 */
export const TiltCard = ({ 
  children, 
  className = "", 
  tiltDegree = 8,
  glare = true,
  onClick = null 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for realistic weight and fluid motion
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltDegree, -tiltDegree]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltDegree, tiltDegree]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      <div style={{ transform: 'translateZ(10px)' }} className="w-full h-full">
        {children}
      </div>

      {/* Dynamic Specular Light Glare Sweep */}
      {glare && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 pointer-events-none"
            style={{
              background: `radial-gradient(circle 320px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.18), transparent 70%)`,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
