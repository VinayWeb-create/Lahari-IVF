import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SuccessMetrics } from './components/SuccessMetrics';
import { IVFJourneyTimeline } from './components/IVFJourneyTimeline';
import { TreatmentExplorer } from './components/TreatmentExplorer';
import { FertilityCalculator } from './components/FertilityCalculator';
import { CostEstimator } from './components/CostEstimator';
import { DoctorProfiles } from './components/DoctorProfiles';
import { SuccessStories } from './components/SuccessStories';
import { CenterLocator } from './components/CenterLocator';
import { BlogHub } from './components/BlogHub';
import { TrustAndAccreditation } from './components/TrustAndAccreditation';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { VirtualConsultationModal } from './components/VirtualConsultationModal';
import { AIAssistant } from './components/AIAssistant';
import { PatientPortalModal } from './components/PatientPortalModal';
import { AdminCMSModal } from './components/AdminCMSModal';
import { OfferExitIntentModal } from './components/OfferExitIntentModal';

// Multi-Page Dedicated Views
import { AboutView } from './components/AboutView';
import { DoctorsView } from './components/DoctorsView';
import { TreatmentsView } from './components/TreatmentsView';
import { TreatmentDetailView } from './components/TreatmentDetailView';
import { FacilitiesGalleryView } from './components/FacilitiesGalleryView';
import { PackagesEMIView } from './components/PackagesEMIView';
import { BranchesView } from './components/BranchesView';
import { SuccessStoriesView } from './components/SuccessStoriesView';
import { ContactView } from './components/ContactView';
import { CareersView } from './components/CareersView';
import { LegalView } from './components/LegalView';
import { SeoSchema } from './components/SeoSchema';

import { Treatment } from './types';
import { TREATMENTS_DATA } from './data/treatmentsData';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Global Context & Modals
  const [selectedCity, setSelectedCity] = useState<string>('New Delhi & NCR');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingDoctor, setBookingDoctor] = useState<string | undefined>(undefined);
  const [bookingType, setBookingType] = useState<'in_person' | 'video_consult'>('video_consult');
  const [bookingNotes, setBookingNotes] = useState<string | undefined>(undefined);

  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Ensure light mode is consistently applied
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // URL Hash Sync for SEO & Bookmarkable routes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('treatment/')) {
        const treatmentId = hash.replace('treatment/', '');
        const found = TREATMENTS_DATA.find(t => t.id === treatmentId);
        if (found) {
          setSelectedTreatment(found);
          setCurrentView('treatment-detail');
          return;
        }
      }

      if (['home', 'about', 'doctors', 'treatments', 'facilities', 'stories', 'packages', 'calculator', 'branches', 'contact', 'careers', 'legal'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setCurrentView('treatment-detail');
    window.location.hash = `treatment/${treatment.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (doctor?: string, notes?: string, type: 'in_person' | 'video_consult' = 'video_consult') => {
    setBookingDoctor(doctor);
    setBookingNotes(notes);
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFD] text-slate-900 font-sans antialiased selection:bg-rose-600 selection:text-white">
      
      {/* 0. Dynamic SEO JSON-LD & Meta Schema */}
      <SeoSchema view={currentView} currentView={currentView} />

      {/* 1. Header Navigation */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onOpenBooking={() => handleOpenBooking()}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        
        {/* VIEW ROUTER */}
        {currentView === 'home' && (
          <>
            {/* 2. Hero Section with Interactive Form & Live Metrics */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onOpenAI={() => setIsAIOpen(true)}
              selectedCity={selectedCity}
            />

            {/* 3. Clinical Success Metrics (Bento Grid) */}
            <SuccessMetrics onOpenBooking={() => handleOpenBooking()} />

            {/* 4. Interactive 6-Stage IVF Roadmap Timeline */}
            <IVFJourneyTimeline onOpenBooking={() => handleOpenBooking()} />

            {/* 5. Comprehensive Treatment Explorer */}
            <TreatmentExplorer onOpenBooking={(doc) => handleOpenBooking(doc)} />

            {/* 6. Conception Probability Calculator Engine */}
            <FertilityCalculator
              onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
              onOpenAI={() => setIsAIOpen(true)}
            />

            {/* 7. Transparent Pricing & 0% EMI Loan Customizer */}
            <CostEstimator
              onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
              selectedCity={selectedCity}
            />

            {/* 8. Senior Medical Faculty & Video Reels */}
            <DoctorProfiles
              onOpenBooking={(doc, type) => handleOpenBooking(doc, undefined, type || 'video_consult')}
              selectedCity={selectedCity}
            />

            {/* 9. Verified Patient Journeys & Baby Milestones */}
            <SuccessStories onOpenBooking={() => handleOpenBooking()} />

            {/* 10. Pan-India Flagship Cleanroom Centres */}
            <CenterLocator
              onOpenBooking={(doc) => handleOpenBooking(doc)}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />

            {/* 11. Accreditations & ICMR / ESHRE Bio-Safety Standards */}
            <TrustAndAccreditation />

            {/* 12. Medically Reviewed Clinical Blog Hub */}
            <BlogHub onOpenBooking={() => handleOpenBooking()} />

            {/* 13. Searchable Clinical FAQ Accordion */}
            <FAQSection
              onOpenBooking={() => handleOpenBooking()}
              onOpenAI={() => setIsAIOpen(true)}
            />
          </>
        )}

        {currentView === 'about' && (
          <AboutView 
            onOpenBooking={() => handleOpenBooking()} 
            onOpenAI={() => setIsAIOpen(true)} 
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsView 
            onOpenBooking={(doc) => handleOpenBooking(doc)} 
            selectedCity={selectedCity} 
          />
        )}

        {currentView === 'treatments' && (
          <TreatmentsView 
            onOpenBooking={(doc) => handleOpenBooking(doc)}
            onSelectTreatment={handleSelectTreatment}
          />
        )}

        {currentView === 'treatment-detail' && selectedTreatment && (
          <TreatmentDetailView
            treatment={selectedTreatment}
            onBack={() => navigateTo('treatments')}
            onOpenBooking={(doc) => handleOpenBooking(doc)}
            onOpenAI={() => setIsAIOpen(true)}
          />
        )}

        {currentView === 'facilities' && (
          <FacilitiesGalleryView 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}

        {currentView === 'packages' && (
          <PackagesEMIView 
            onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
            selectedCity={selectedCity}
          />
        )}

        {currentView === 'calculator' && (
          <div className="py-12">
            <FertilityCalculator
              onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
              onOpenAI={() => setIsAIOpen(true)}
            />
          </div>
        )}

        {currentView === 'stories' && (
          <SuccessStoriesView 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}

        {currentView === 'branches' && (
          <BranchesView 
            onOpenBooking={(doc) => handleOpenBooking(doc)}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        )}

        {currentView === 'contact' && (
          <ContactView 
            onOpenBooking={() => handleOpenBooking()}
            selectedCity={selectedCity}
          />
        )}

        {currentView === 'careers' && (
          <CareersView />
        )}

        {currentView === 'legal' && (
          <LegalView />
        )}

      </main>

      {/* 14. Hospital Network Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 15. Floating Quick Actions & AI Copilot Bubble */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* 16. Multi-Step Virtual & In-Clinic Booking Modal */}
      <VirtualConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctor={bookingDoctor}
        initialType={bookingType}
        initialNotes={bookingNotes}
        selectedCity={selectedCity}
      />

      {/* 17. Dr. Lahari AI Clinical Assistant Modal */}
      <AIAssistant
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
      />

      {/* 18. Patient Care Portal & Follicle Tracker Modal */}
      <PatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* 19. Hospital Admin CMS & Triage Telemetry Modal */}
      <AdminCMSModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* 20. Exit-Intent & Scroll-Depth Offer Modal */}
      <OfferExitIntentModal
        onOpenBooking={(doc, notes) => handleOpenBooking(doc, notes)}
      />

    </div>
  );
}
