"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* The Blueprint Frame */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200">
        <motion.rect
          x="5" y="5" width="190" height="190" rx="20"
          fill="none"
          stroke="currentColor"
          className="text-accent-terracotta"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* The Image with Entrance Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-48 w-48 overflow-hidden rounded-[20px]"
      >
        <Image
          src="/profile.jpg" // Ensure your image is in the public folder
          alt="Mohsina Alima"
          fill
          priority
          className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
        />
      </motion.div>
    </div>
  );
}