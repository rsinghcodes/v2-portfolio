"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Icon3DProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  hoverEffect?: boolean;
}

export default function Icon3D({
  src,
  alt,
  size = 64,
  className = "",
  hoverEffect = true,
}: Icon3DProps) {
  return (
    <motion.div
      className={`icon-3d ${className}`}
      whileHover={
        hoverEffect
          ? {
              scale: 1.2,
              rotateY: 15,
              rotateX: 10,
              transition: { duration: 0.3 },
            }
          : {}
      }
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
