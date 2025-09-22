# My Portfolio

A modern, minimalist portfolio website built with Next.js 15, featuring 3D elements, interactive animations, and a beautiful light/dark theme system.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Theme**: Custom CSS variables with localStorage persistence

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone
   cd portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme management context
│   ├── globals.css             # Global styles and theme variables
│   ├── layout.tsx              # Root layout with ThemeProvider
│   ├── page.tsx                # Main portfolio page
│   └── projects/
│       └── page.tsx            # Projects page
├── components/
│   ├── 3DIcon.tsx              # 3D icon component
│   ├── NavItems.tsx            # Navigation component
│   ├── SocialIcons.tsx         # Social media icons
│   ├── ThemeToggle.tsx         # Theme toggle button
│   └── Wrapper.tsx             # Layout wrapper
└── public/
    ├── assets/                 # Project images and logos
    └── icons/                  # Social media icons
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
