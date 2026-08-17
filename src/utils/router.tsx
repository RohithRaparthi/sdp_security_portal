import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageId = 'home' | 's-chat' | 'outfit-ai' | 'ai-build';

interface RouterContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, hash?: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigateTo: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#/product/s-chat') || hash.startsWith('#/products/s-chat')) return 's-chat';
    if (hash.startsWith('#/product/outfit-ai') || hash.startsWith('#/products/outfit-ai')) return 'outfit-ai';
    if (hash.startsWith('#/product/ai-build') || hash.startsWith('#/products/ai-build') || hash.startsWith('#/product/security-portal')) return 'ai-build';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      if (page !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, hash?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (hash) {
        window.location.hash = hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `/products/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useNavigation = () => useContext(RouterContext);
