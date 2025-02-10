'use client'

import { motion } from "framer-motion";
import React, { useRef } from "react";

interface MindMapProps {
  title: string;
  items: string[];
}

const MindMap: React.FC<MindMapProps> = ({ title, items }) => {
  const centerX = 150;
  const centerY = 150;
  const radius = 120;
  const constraintsRef = useRef<HTMLDivElement>(null)
  return (
    <motion.div ref={constraintsRef} className="relative w-[300px] h-[300px] mx-auto mt-10">
      <div className="absolute w-[100px] h-[100px] bg-secondaryColor capitalize text-white flex justify-center items-center font-bold rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center shadow-lg">
        {title}
      </div>

      {items.map((item, index) => {
        const angle = (index / items.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
            <motion.div
              key={index}
              className="absolute font-bold text-lg whitespace-nowrap"
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transformOrigin: "150px 150px",
              }}
            >
              {item}
            </motion.div>
          );
      })}
    </motion.div>
  );
};

export default MindMap