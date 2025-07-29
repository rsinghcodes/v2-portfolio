import { AnimatePresence, motion } from 'framer-motion';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  isVisible: boolean;
}

export default function Tooltip({
  children,
  content,
  isVisible,
}: TooltipProps) {
  return (
    <div className="relative w-full h-full group grid place-items-center">
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-1.5 text-xs text-background bg-foreground backdrop-blur-md border border-border/50 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
