"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Trophy, 
  Star,
  Coins,
  Volume2,
  VolumeX
} from "lucide-react";
import CountdownTimer from "../components/CountdownTimer";
import ActionButton from "../components/ActionButton";
import WalletCard from "../components/WalletCard";

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  bet: "rug" | "riches" | null;
  amount: number;
}

interface PoolData {
  rug: number;
  riches: number;
  total: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [walletBalance, setWalletBalance] = useState(1250.50);
  const [stakedAmount, setStakedAmount] = useState(0);
  const [selectedBet, setSelectedBet] = useState<"rug" | "riches" | null>(null);
  const [betAmount, setBetAmount] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showNotificationState, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [poolData, setPoolData] = useState<PoolData>({
    rug: 45000,
    riches: 78000,
    total: 123000
  });
  const [players, setPlayers] = useState<Player[]>([
    { id: "1", name: "CryptoWhale", avatar: "🐋", score: 1250, bet: "riches", amount: 5000 },
    { id: "2", name: "DegenMaster", avatar: "🔥", score: 890, bet: "rug", amount: 2500 },
    { id: "3", name: "MoonWalker", avatar: "🚀", score: 650, bet: "riches", amount: 3000 },
    { id: "4", name: "RugHunter", avatar: "🕵️", score: 420, bet: "rug", amount: 1500 },
    { id: "5", name: "DiamondHands", avatar: "💎", score: 320, bet: "riches", amount: 2000 },
  ]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Round ended - show results
          showNotification("Round ended! Calculating results...");
          return 600; // Reset to 10 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const showNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleBet = (type: "rug" | "riches") => {
    if (!betAmount || parseFloat(betAmount) <= 0) {
      showNotification("Please enter a valid bet amount");
      return;
    }
    
    const amount = parseFloat(betAmount);
    if (amount > walletBalance) {
      showNotification("Insufficient balance");
      return;
    }

    setSelectedBet(type);
    setWalletBalance(prev => prev - amount);
    setStakedAmount(prev => prev + amount);
    
    // Update pool data
    setPoolData(prev => ({
      ...prev,
      [type]: prev[type] + amount,
      total: prev.total + amount
    }));

    // Add player to leaderboard
    const newPlayer: Player = {
      id: Date.now().toString(),
      name: "You",
      avatar: "🎯",
      score: 0,
      bet: type,
      amount: amount
    };
    setPlayers(prev => [newPlayer, ...prev.slice(0, 4)]);

    showNotification(`Bet placed on ${type.toUpperCase()}!`);
    setBetAmount("");
  };

  const handleConnectWallet = () => {
    setIsConnected(true);
    showNotification("Wallet connected successfully!");
  };

  const floatingMemes = [
    { text: "🚀 TO THE MOON!", delay: 0, duration: 3 },
    { text: "💎 DIAMOND HANDS", delay: 2, duration: 3 },
    { text: "🔥 WEN LAMBO?", delay: 4, duration: 3 },
    { text: "⚡ APE IN!", delay: 6, duration: 3 },
    { text: "🌙 HODL", delay: 8, duration: 3 },
    { text: "🎯 BULLISH", delay: 10, duration: 3 },
    { text: "💸 MONEY PRINTER", delay: 12, duration: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingMemes.map((meme, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            initial={{ 
              x: Math.random() * 100, 
              y: 100,
              opacity: 0 
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.3, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: meme.duration,
              delay: meme.delay,
              repeat: Infinity,
              repeatDelay: 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${meme.delay}s`
            }}
          >
            {meme.text}
          </motion.div>
        ))}
      </div>

      {/* Sound toggle */}
      <motion.button
        className="fixed top-4 right-4 z-50 glass p-3 rounded-full"
        onClick={() => setSoundEnabled(!soundEnabled)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {soundEnabled ? (
          <Volume2 className="w-5 h-5 text-cyan-400" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
      </motion.button>

      {/* Notification */}
      <AnimatePresence>
        {showNotificationState && (
          <motion.div
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 glass px-6 py-3 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white">{notificationMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold gradient-text neon-glow mb-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
            RUG OR RICHES
          </h1>
          <p className="text-xl text-cyan-300 neon-glow-teal">
            $GUI Prediction Game • Web3 Edition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Countdown Timer */}
            <CountdownTimer timeLeft={timeLeft} />

            {/* Action Buttons */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ActionButton
                type="rug"
                onClick={() => handleBet("rug")}
                disabled={!isConnected}
              />
              <ActionButton
                type="riches"
                onClick={() => handleBet("riches")}
                disabled={!isConnected}
              />
            </motion.div>

            {/* Bet Input */}
            <motion.div 
              className="glass glass-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Coins className="text-yellow-400 w-6 h-6" />
                <span className="text-lg text-gray-300">Place Your Bet</span>
              </div>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Amount in $GUI"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  className="flex-1 bg-black/30 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  className="btn-primary px-6"
                  onClick={() => selectedBet && handleBet(selectedBet)}
                  disabled={!selectedBet || !betAmount || !isConnected}
                >
                  Place Bet
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet Card */}
            <WalletCard
              balance={walletBalance}
              stakedAmount={stakedAmount}
              onConnect={handleConnectWallet}
              isConnected={isConnected}
            />

            {/* Pool Tracker */}
            <motion.div 
              className="glass glass-hover p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-purple-400 w-6 h-6" />
                <span className="text-lg text-gray-300">Pool Tracker</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-red-400">🔥 Rug Pool</span>
                  <span className="text-red-400 font-bold">{(poolData.rug / 1000).toFixed(1)}k $GUI</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full"
                    style={{ width: `${(poolData.rug / poolData.total) * 100}%` }}
                    animate={{ width: `${(poolData.rug / poolData.total) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400">🚀 Riches Pool</span>
                  <span className="text-green-400 font-bold">{(poolData.riches / 1000).toFixed(1)}k $GUI</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                    style={{ width: `${(poolData.riches / poolData.total) * 100}%` }}
                    animate={{ width: `${(poolData.riches / poolData.total) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="pt-2 border-t border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400">Total Pool</span>
                    <span className="text-cyan-400 font-bold">{(poolData.total / 1000).toFixed(1)}k $GUI</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leaderboard */}
            <motion.div 
              className="glass glass-hover p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-yellow-400 w-6 h-6" />
                <span className="text-lg text-gray-300">Leaderboard</span>
              </div>
              <div className="space-y-3">
                {players.map((player, index) => (
                  <motion.div
                    key={player.id}
                    className="flex items-center justify-between p-3 bg-black/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{player.avatar}</span>
                      <div>
                        <div className="font-semibold text-white">{player.name}</div>
                        <div className="text-sm text-gray-400">Score: {player.score}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${player.bet === 'rug' ? 'text-red-400' : 'text-green-400'}`}>
                        {player.bet?.toUpperCase()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {player.amount.toFixed(1)} $GUI
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Meme Booster Cards */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-pink-400 w-6 h-6" />
            <span className="text-lg text-gray-300">Meme Boosters</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Diamond Hands", emoji: "💎", boost: "2x", color: "from-blue-500 to-cyan-500" },
              { name: "Ape Mode", emoji: "🦍", boost: "3x", color: "from-purple-500 to-pink-500" },
              { name: "Moon Shot", emoji: "🚀", boost: "5x", color: "from-green-500 to-emerald-500" },
              { name: "Rug Alert", emoji: "⚠️", boost: "1.5x", color: "from-red-500 to-orange-500" },
            ].map((booster, index) => (
              <motion.div
                key={booster.name}
                className="glass glass-hover p-4 text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="text-3xl mb-2">{booster.emoji}</div>
                <div className="text-sm font-semibold text-white mb-1">{booster.name}</div>
                <div className={`text-xs bg-gradient-to-r ${booster.color} bg-clip-text text-transparent font-bold`}>
                  {booster.boost} BOOST
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
