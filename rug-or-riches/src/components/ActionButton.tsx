"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Moon } from "lucide-react";

interface ActionButtonProps {
  type: "rug" | "riches";
  onClick: () => void;
  disabled?: boolean;
}

export default function ActionButton({ type, onClick, disabled = false }: ActionButtonProps) {
  const isRug = type === "rug";
  const Icon = isRug ? AlertTriangle : Moon;
  const buttonClass = isRug ? "btn-danger" : "btn-success";
  const iconColor = isRug ? "text-red-400" : "text-green-400";
  const bgColor = isRug ? "bg-red-500/20" : "bg-green-500/20";
  
  const content = {
    rug: {
      emoji: "🔥",
      title: "RUG",
      subtitle: "Danger Zone"
    },
    riches: {
      emoji: "🚀",
      title: "RICHES",
      subtitle: "To The Moon"
    }
  };

  return (
    <motion.button
      className={`${buttonClass} text-2xl font-bold py-8 relative overflow-hidden group`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Icon className={`absolute top-2 right-2 w-6 h-6 opacity-50 ${iconColor}`} />
      <div className="text-4xl mb-2">{content[type].emoji}</div>
      <div className="text-2xl mb-2">{content[type].title}</div>
      <div className="text-sm opacity-80">{content[type].subtitle}</div>
      
      {/* Hover effect overlay */}
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Disabled overlay */}
      {disabled && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-sm text-gray-400">Connect Wallet</span>
        </div>
      )}
    </motion.button>
  );
} 