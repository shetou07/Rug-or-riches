"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  timeLeft: number;
}

export default function CountdownTimer({ timeLeft }: CountdownTimerProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft <= 60; // Last minute warning

  return (
    <motion.div 
      className="glass glass-hover p-6 text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Background pulse effect for low time */}
      {isLowTime && (
        <motion.div
          className="absolute inset-0 bg-red-500/10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          animate={isLowTime ? { rotate: [0, 360] } : {}}
          transition={{ duration: 1, repeat: isLowTime ? Infinity : 0 }}
        >
          <Clock className={`w-6 h-6 ${isLowTime ? 'text-red-400' : 'text-cyan-400'}`} />
        </motion.div>
        <span className="text-lg text-gray-300">Next Round</span>
      </div>
      
      <motion.div 
        className={`text-4xl md:text-6xl font-bold ${isLowTime ? 'text-red-400 neon-glow-red' : 'text-cyan-400 neon-glow-teal'}`}
        style={{ fontFamily: 'var(--font-orbitron)' }}
        animate={isLowTime ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.5, repeat: isLowTime ? Infinity : 0 }}
      >
        {formatTime(timeLeft)}
      </motion.div>
      
      {isLowTime && (
        <motion.div
          className="text-sm text-red-400 mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⚠️ HURRY UP! ⚠️
        </motion.div>
      )}
    </motion.div>
  );
} 