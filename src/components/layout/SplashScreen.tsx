import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sdpLogo from '../../assets/sdp-logo.jpg';

export const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after a short duration (1.8s total)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020712] overflow-hidden"
        >
          {/* Ambient Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D9FF]/15 to-[#8CC63F]/15 rounded-full blur-[100px] pointer-events-none"
          ></motion.div>

          <motion.div
            initial={{ scale: 0.8, rotateX: 30, opacity: 0, y: 20 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 20,
              duration: 1 
            }}
            className="relative w-[280px] sm:w-[360px] md:w-[480px] z-10 perspective-[1000px]"
          >
            {/* The Logo Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,217,255,0.15)] bg-[#050A14]">
              <motion.img 
                src={sdpLogo} 
                alt="SDP Protection Innovation" 
                className="w-full h-auto relative z-10"
              />
              
              {/* Premium Glass Light Sweep (Dopamine hit) */}
              <motion.div
                initial={{ left: '-150%' }}
                animate={{ left: '150%' }}
                transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 z-20 w-[100%] h-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] pointer-events-none mix-blend-overlay"
              />
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
