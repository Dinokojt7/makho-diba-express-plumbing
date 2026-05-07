'use client';
import { useEffect, useState, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const scrolling = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrolling.current) {
        if (window.scrollY <= 50) {
          scrolling.current = false;
          setVisible(false);
        }
        return;
      }
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scrolling.current = true;
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = Math.max(800, Math.min(start * 0.6, 2000));

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - ease(progress)));
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-24 right-6 z-50 w-8 h-8 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: '#B21F36' }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-4 h-4 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
