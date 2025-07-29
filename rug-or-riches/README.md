# 🚀 Rug or Riches - $GUI Prediction Game

A futuristic Web3 prediction game built around the $GUI token, featuring a sleek, meme-culture inspired interface optimized for crypto-savvy users.
Link to the site - https://rug-or-riches-nva7.vercel.app/

## ✨ Features

### 🎮 Core Gameplay
- **10-minute prediction rounds** with real-time countdown timer
- **Two betting options**: "Rug" (danger zone) vs "Riches" (to the moon)
- **$GUI token integration** for all transactions and rewards
- **Real-time pool tracking** showing total staked amounts per side
- **Dynamic leaderboard** with player avatars and scores


### 💰 Wallet & Staking
- **$GUI wallet balance** display with live updates
- **Staking interface** for placing bets
- **Real-time balance tracking** with visual indicators
- **Connect wallet functionality** (ready for Web3 integration)

### 🏆 Gamification Elements
- **Meme booster cards** with different multiplier effects
- **Leaderboard system** with player rankings
- **Achievement notifications** and feedback
- **Sound effects toggle** for enhanced UX


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rug-or-riches.git
   cd rug-or-riches
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
```bash
npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Game Mechanics

### Betting System
- Players bet $GUI tokens on either "Rug" or "Riches"
- Pool accumulates on both sides during the round
- Winners split the losing pool based on their bet proportion
- 10-minute rounds with automatic reset

### Pool Tracking
- Real-time visualization of total staked amounts
- Color-coded progress bars (red for rug, green for riches)
- Live updates as players place bets

### Leaderboard
- Top players ranked by score
- Shows current bet and amount staked
- Avatar system for player identification



## 🔧 Customization

### Adding New Meme Boosters
Edit the booster cards in `src/app/page.tsx`:
```typescript
const boosters = [
  { name: "New Booster", emoji: "🎯", boost: "4x", color: "from-purple-500 to-pink-500" }
];
```

### Modifying Game Duration
Change the timer duration in the main component:
```typescript
const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Automatic deployment from GitHub
- **AWS Amplify**: Full-stack deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Meme culture** for inspiration and humor
- **Web3 community** for the innovative spirit
- **Crypto Twitter** for the endless entertainment
- **Framer Motion** for the smooth animations
- **Tailwind CSS** for the utility-first styling

## 🐛 Known Issues

- Wallet connection is currently simulated (ready for Web3 integration)
- Real-time multiplayer features planned for v2

## 🔮 Roadmap

- [ ] **Web3 Integration** - Connect real wallets (MetaMask, WalletConnect)
- [ ] **Smart Contract** - Deploy on Ethereum/Polygon
- [ ] **Multiplayer** - Real-time player interactions
- [ ] **NFT Integration** - Collectible meme cards
- [ ] **Mobile App** - React Native version
- [ ] **Tournament Mode** - Competitive leagues
- [ ] **Sound Effects** - Immersive audio experience

---

