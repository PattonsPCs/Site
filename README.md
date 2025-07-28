# Patton's PC Clinic - Modern Tech Startup Website

A modern, pixelized, gamified yet professional website for Patton's PC Clinic, offering computer repair, custom PC building, and website development services.

## 🚀 Features

- **Modern Gaming Aesthetic**: Pixelized design with neon accents and cyberpunk elements
- **Interactive Components**: Animated hero section, service selector, and portfolio showcase
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **SEO Ready**: Complete metadata and schema markup
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **3D Graphics**: Three.js / React Three Fiber (for future PC builder)

### Backend (Future Implementation)
- **Runtime**: Node.js
- **Framework**: Express.js / NestJS
- **Database**: Firebase / Supabase
- **Real-time**: WebSockets
- **Hosting**: Vercel (Frontend) + AWS (Backend)

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Portfolio showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── MatrixBackground.tsx # Animated background
├── lib/               # Utility libraries
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Neon Cyan (#00ffff)
- **Secondary**: Neon Pink (#ff00ff), Neon Green (#00ff00)
- **Background**: Dark gradients (#050505, #0f0f0f, #1a1a1a)
- **Text**: White, Gray variations

### Typography
- **Headings**: Orbitron (Cyber font)
- **Body**: Inter (Main font)
- **Accents**: Press Start 2P (Pixel font)

### Animations
- **Hover Effects**: Scale, glow, and color transitions
- **Page Transitions**: Framer Motion animations
- **Background**: Matrix rain effect
- **Micro-interactions**: Button clicks, form interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pattons-pc-clinic.git
   cd pattons-pc-clinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Features Overview

### Homepage
- **Hero Section**: Animated title with service quick selector
- **Stats Display**: Key metrics and achievements
- **Scroll Indicator**: Animated scroll prompt

### Services
- **Interactive Tabs**: Switch between repair, building, and web development
- **Pricing Display**: Real-time pricing for each service
- **Feature Lists**: Detailed service inclusions
- **Turnaround Times**: Service completion estimates

### Portfolio
- **Project Showcase**: Grid layout of past work
- **Category Filtering**: Filter by service type
- **Interactive Previews**: Hover effects and project details

### Contact
- **Contact Form**: Multi-step form with validation
- **Service Selection**: Dropdown for service type
- **Contact Information**: Multiple contact methods
- **Response Time**: Expected response times

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://pattonspcclinic.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@pattonspcclinic.com
NEXT_PUBLIC_PHONE_NUMBER=(555) 123-4567
```

### Customization
- **Colors**: Modify `tailwind.config.js` for color scheme changes
- **Content**: Update component files for text and image changes
- **Animations**: Adjust Framer Motion configurations
- **Styling**: Modify `globals.css` for custom CSS

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js tree shaking
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts with display swap

## 🔮 Future Enhancements

### Phase 2 Features
- **Interactive PC Builder**: 3D component selection
- **AR Preview**: WebAR for PC visualization
- **Client Dashboard**: Service tracking portal
- **E-commerce**: Pre-built PC sales
- **Live Chat**: WebSocket-based support

### Phase 3 Features
- **Booking System**: Online appointment scheduling
- **Payment Integration**: Stripe/PayPal integration
- **Inventory Management**: Real-time stock tracking
- **Analytics Dashboard**: Business insights
- **Mobile App**: React Native companion app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anthony Patton** - *Patton's PC Clinic*

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- Lucide for beautiful icons
- The gaming community for inspiration

---

**Built with ❤️ and lots of ☕ by Patton's PC Clinic** 