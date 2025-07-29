# 🚀 Rug or Riches - $GUI Prediction Game

A futuristic Web3 prediction game built around the $GUI token, featuring a sleek, meme-culture inspired interface optimized for crypto-savvy users.

## ✨ Features

### 🎮 Core Gameplay
- **10-minute prediction rounds** with real-time countdown timer
- **Two betting options**: "Rug" (danger zone) vs "Riches" (to the moon)
- **$GUI token integration** for all transactions and rewards
- **Real-time pool tracking** showing total staked amounts per side
- **Dynamic leaderboard** with player avatars and scores

### 🎨 Visual Design
- **Futuristic Web3 aesthetic** with neon color palette
- **Glassmorphism effects** with glowing hover animations
- **Dark mode by default** with gradient backgrounds
- **Tech-style fonts** (Orbitron for titles, clean sans-serif for body)
- **Floating meme animations** ("to the moon", "diamond hands", etc.)

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

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Orbitron (display) + Geist (body text)
- **Language**: TypeScript for type safety

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

## 🎨 Design System

### Color Palette
- **Neon Teal**: `#00ffff` - Primary accent
- **Neon Purple**: `#8b5cf6` - Secondary accent  
- **Neon Pink**: `#ff0080` - Highlight color
- **Neon Green**: `#00ff88` - Success states
- **Neon Red**: `#ff0040` - Danger states
- **Dark Background**: `#0a0a0a` - Base color

### Typography
- **Display Font**: Orbitron (titles, timers)
- **Body Font**: Geist Sans (content, UI)
- **Monospace**: Geist Mono (numbers, data)

### Components
- **Glassmorphism cards** with backdrop blur
- **Gradient buttons** with hover effects
- **Animated progress bars** with smooth transitions
- **Floating elements** with parallax effects

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

### Customizing Colors
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --neon-teal: #your-color;
  --neon-purple: #your-color;
}
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
- Sound effects need actual audio files
- Mobile responsiveness could be enhanced
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

**Built with ❤️ for the crypto community**

*"In crypto we trust, in memes we believe"* 🚀
