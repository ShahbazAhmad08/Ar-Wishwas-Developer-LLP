import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SiteVisitModal } from './components/SiteVisitModal';
import { SiteDetailModal } from './components/SiteDetailModal';
import { ScrollToTop } from './components/ScrollToTop';
import { AmbientGlowFollower } from './components/AmbientGlowFollower';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PlotMapPage } from './pages/PlotMapPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Animated Page Transition Wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Animated Routes Component
const AnimatedRoutes = ({ onOpenSiteVisit, onOpenSiteDetail }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <HomePage onOpenSiteVisit={onOpenSiteVisit} />
            </PageTransition>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageTransition>
              <ProjectsPage 
                onOpenSiteDetail={onOpenSiteDetail} 
                onOpenSiteVisit={onOpenSiteVisit} 
              />
            </PageTransition>
          } 
        />
        <Route 
          path="/plot-map" 
          element={
            <PageTransition>
              <PlotMapPage onOpenSiteVisit={onOpenSiteVisit} />
            </PageTransition>
          } 
        />
        <Route 
          path="/calculators" 
          element={
            <PageTransition>
              <CalculatorsPage onOpenSiteVisit={onOpenSiteVisit} />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <AboutPage onOpenSiteVisit={onOpenSiteVisit} />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [selectedDetailSite, setSelectedDetailSite] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  const handleOpenSiteVisit = () => {
    setSiteVisitModalOpen(true);
  };

  const handleCloseSiteVisit = () => {
    setSiteVisitModalOpen(false);
  };

  const handleOpenSiteDetail = (site) => {
    setSelectedDetailSite(site);
  };

  const handleCloseSiteDetail = () => {
    setSelectedDetailSite(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Subtle luxury ambient cursor aura for non-touch screens */}
      <AmbientGlowFollower />

      {/* Ultra-Smooth Luxury Golden Reading Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 origin-left z-[9999] shadow-[0_0_12px_rgba(245,158,11,0.8)] pointer-events-none"
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white relative">
        
        {/* Minimal Glass Navbar */}
        <Navbar onOpenSiteVisit={handleOpenSiteVisit} />

        {/* Animated Multi-Page Routes */}
        <main className="flex-grow">
          <AnimatedRoutes 
            onOpenSiteVisit={handleOpenSiteVisit} 
            onOpenSiteDetail={handleOpenSiteDetail} 
          />
        </main>

        {/* Corporate Footer */}
        <Footer onOpenSiteVisit={handleOpenSiteVisit} />

        {/* Floating Quick Actions */}
        <FloatingActions onOpenSiteVisit={handleOpenSiteVisit} />

        {/* Schedule Site Visit Modal */}
        <SiteVisitModal
          isOpen={siteVisitModalOpen}
          onClose={handleCloseSiteVisit}
        />

        {/* Site Detail Specifications Modal */}
        <SiteDetailModal
          site={selectedDetailSite}
          onClose={handleCloseSiteDetail}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
