import React from 'react';
import { RouterProvider, useNavigation } from './utils/router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { SChatPage } from './pages/SChatPage';
import { OutfitAIPage } from './pages/OutfitAIPage';
import { SecurityPortalPage } from './pages/SecurityPortalPage';
import { AnimatePresence, motion } from 'framer-motion';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-[#020712] text-[#F5F7FA] selection:bg-[#00D9FF]/20 selection:text-[#00D9FF]">
      <Navbar />
      
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          )}

          {currentPage === 's-chat' && (
            <motion.div
              key="s-chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SChatPage />
            </motion.div>
          )}

          {currentPage === 'outfit-ai' && (
            <motion.div
              key="outfit-ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <OutfitAIPage />
            </motion.div>
          )}

          {currentPage === 'ai-build' && (
            <motion.div
              key="ai-build"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SecurityPortalPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <MainContent />
    </RouterProvider>
  );
}

export default App;
