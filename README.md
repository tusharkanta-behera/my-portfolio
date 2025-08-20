# 🚀 Tusharkanta Behera - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek design with smooth animations, interactive components, and a fully responsive layout that works seamlessly across all devices.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC)

## ✨ Features

### 🎨 **Modern Design**

- **Dark Theme**: Elegant dark color scheme with blue accent colors
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions

### 🧩 **Interactive Components**

- **3D Flip Cards**: Interactive about section with rotating cards
- **Dynamic Navigation**: Smooth scrolling navigation with active section highlighting
- **Certificate Carousel**: 3D card stack with interactive navigation
- **Contact Form**: Functional contact form with EmailJS integration
- **Particle System**: Animated background particles for visual appeal

### 📱 **Responsive Features**

- **Mobile-First Design**: Optimized for all screen sizes
- **Touch-Friendly**: Proper touch interactions on mobile devices
- **Adaptive Layout**: Components automatically adjust to screen dimensions
- **Consistent Spacing**: Maintains visual hierarchy across all breakpoints

### 🛠 **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components
- **State Management**: Efficient state handling with React hooks
- **Performance Optimized**: Optimized builds with Vite

## 🛠 Tech Stack

### **Frontend Framework**

- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server

### **Styling & UI**

- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful, customizable icons

### **Additional Libraries**

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **EmailJS** - Email service integration
- **Framer Motion** - Animation library
- **React Query** - Data fetching and caching

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8081` (or the port shown in terminal)

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Additional builds
npm run build:dev    # Build in development mode
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section with flip cards
│   ├── Certificates.tsx # Certificates carousel
│   ├── Contact.tsx     # Contact form and info
│   ├── Experience.tsx  # Work experience
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills display
│   └── ThemeToggle.tsx # Theme switching
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### **Navigation Bar**

- Fixed positioning with smooth scroll navigation
- Responsive mobile menu with hamburger icon
- Active section highlighting
- Smooth transitions and hover effects

### **Hero Section**

- Animated particle background
- Call-to-action buttons
- Smooth scroll to sections
- Responsive text sizing

### **About Section**

- 3D flip card with personal information
- Interactive hover effects
- Responsive grid layout
- Professional bio and resume download

### **Certificates**

- 3D card stack carousel
- Interactive navigation controls
- Responsive grid layout
- Professional certification display

### **Contact Form**

- Functional contact form with EmailJS
- Social media links
- Responsive layout
- Form validation and error handling

## 🌐 Deployment

### **Netlify (Recommended)**

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**

   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Environment Variables** (if needed)
   - Add any required API keys in Netlify dashboard

### **Other Platforms**

- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: Use Firebase CLI

## 🔧 Configuration

### **Tailwind CSS**

- Custom color palette defined in `tailwind.config.ts`
- Responsive breakpoints configured
- Animation utilities enabled

### **Vite Configuration**

- React plugin with SWC for fast compilation
- Optimized build settings
- Development server configuration

### **ESLint**

- React hooks rules enabled
- TypeScript support
- Consistent code formatting

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - Adaptive grid layouts
- **Desktop**: `> 1024px` - Full multi-column layouts

## 🎨 Customization

### **Colors**

- Primary: Blue gradient (`from-blue-500 to-cyan-500`)
- Secondary: Various accent colors for different sections
- Background: Dark theme with transparency effects

### **Typography**

- Headings: Bold, gradient text effects
- Body: Clean, readable fonts
- Responsive sizing across breakpoints

### **Animations**

- Smooth transitions (300ms duration)
- Hover effects with scale transforms
- CSS animations for particle systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: tusharkantabehera85@gmail.com
- **GitHub**: [@tusharkanta-behera](https://github.com/tusharkanta-behera)
- **LinkedIn**: [Tusharkanta Behera](https://linkedin.com/in/tusharkanta-behera/)

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **Vite** for fast build tooling
- **React community** for excellent documentation and support

---

⭐ **Star this repository if you found it helpful!**
