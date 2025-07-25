'use client';

import { motion } from 'framer-motion';
import Icon3D from './3DIcon';

interface SocialIconProps {
  src: string;
  alt: string;
  url: string;
  size?: number;
}

export default function SocialIcons() {
  const socialLinks = [
    {
      src: '/icons/LinkedIn.png',
      alt: 'LinkedIn',
      url: 'https://linkedin.com/in/raghvendrrsingh',
      size: 32,
    },
    {
      src: '/icons/github.png',
      alt: 'GitHub',
      url: 'https://github.com/rsinghcodes',
      size: 28,
    },
    {
      src: '/icons/mail.png',
      alt: 'Email',
      url: 'mailto:raghvendrrsingh@gmail.com',
      size: 32,
    },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          className="flex justify-center mb-8 transition-transform duration-200 hover:scale-125 hover:drop-shadow-[0_0_8px_var(--accent)]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon3D
            src={social.src}
            alt={social.alt}
            size={social.size}
            className="float"
          />
        </motion.a>
      ))}
    </div>
  );
}
