"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingUp } from "lucide-react";

interface WalletCardProps {
  balance: number;
  stakedAmount: number;
  onConnect?: () => void;
  isConnected?: boolean;
}

export default function WalletCard({ 
  balance, 
  stakedAmount, 
  onConnect, 
  isConnected = true 
}: WalletCardProps) {
  return (
    <motion.div 
      className="glass glass-hover p-6 relative overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={isConnected ? { rotate: [0, 360] } : {}}
            transition={{ duration: 2, repeat: isConnected ? Infinity : 0 }}
          >
            <Wallet className="text-green-400 w-6 h-6" />
          </motion.div>
          <span className="text-lg text-gray-300">Wallet</span>
          {!isConnected && (
            <motion.div
              className="ml-auto"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <button
                onClick={onConnect}
                className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded"
              >
                Connect
              </button>
            </motion.div>
          )}
        </div>
        
        {isConnected ? (
          <>
            <motion.div 
              className="text-2xl font-bold text-green-400 neon-glow-green mb-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {balance.toFixed(2)} $GUI
            </motion.div>
            
            {stakedAmount > 0 && (
              <motion.div 
                className="text-sm text-cyan-400 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TrendingUp className="w-4 h-4" />
                Staked: {stakedAmount.toFixed(2)} $GUI
              </motion.div>
            )}
            
            {/* Balance change indicator */}
            <motion.div
              className="mt-2 text-xs text-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💰 Live Balance
            </motion.div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-gray-400 mb-2">Connect your wallet to start playing</div>
            <button
              onClick={onConnect}
              className="btn-primary text-sm"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
} 