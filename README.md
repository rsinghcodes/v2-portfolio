# Software Engineer Portfolio

A modern, minimalist portfolio website built with Next.js 15, featuring 3D elements, dark/light mode, and interactive animations.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with 3D hover effects
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 🎭 **3D Background**: Interactive Spline 3D scene as background
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Performance**: Built with Next.js 15 and optimized for speed
- 🎯 **SEO Friendly**: Proper meta tags and structured data
- 🎪 **Animations**: Smooth scroll animations with Framer Motion
- 🔗 **Social Integration**: Direct links to social profiles and email

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Spline
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Language**: TypeScript

## Installation

1. **Install Dependencies**

   ```bash
   npm install @splinetool/react-spline @splinetool/runtime lucide-react framer-motion
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/              # Reusable components (if needed)
└── lib/                     # Utility functions (if needed)
```

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

- Name and title
- About section content
- Skills and proficiency levels
- Project details and links
- Social media links
- Email address

### Styling

- Colors: Modify CSS variables in `src/app/globals.css`
- Fonts: Update font imports in `src/app/layout.tsx`
- Animations: Adjust Framer Motion settings

### 3D Background

- Replace the Spline scene URL in the main component
- Create your own 3D scene at [Spline](https://spline.design)

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal background and expertise areas
3. **Skills**: Technical skills with progress bars
4. **Projects**: Featured projects with links
5. **Contact**: Email and social media links

## Performance

- Optimized images and assets
- Lazy loading for animations
- Efficient CSS with Tailwind
- SEO optimized meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- 3D Graphics: [Spline](https://spline.design)
- Icons: [Lucide](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Fonts: [Geist](https://vercel.com/font)
