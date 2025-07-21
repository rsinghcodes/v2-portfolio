"use client";

import { motion } from "framer-motion";
import Icon3D from "./3DIcon";

interface SocialIconProps {
  src: string;
  alt: string;
  url: string;
  size?: number;
}

export default function SocialIcons() {
  const socialLinks = [
    {
      src: "/icons/LinkedIn.png",
      alt: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      size: 32,
    },
    {
      src: "/icons/Twitter.png",
      alt: "Twitter",
      url: "https://twitter.com/johndoe",
      size: 32,
    },
    {
      src: "/icons/mail.png",
      alt: "Email",
      url: "mailto:john.doe@example.com",
      size: 32,
    },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          className="flex justify-center mb-8"
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
