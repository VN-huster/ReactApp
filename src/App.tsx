import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import AppLayout from './layouts/AppLayout';
import SpaHomePage from './pages/SpaHomePage';
import SelectTechnician from './pages/SelectTechnician';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

type PageType = 'home' | 'services' | 'booking' | 'contact' | 'select-technician';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home'); // Reset to home page on logout
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <SpaHomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage />;
      case 'booking':
        return <BookingPage />;
      case 'contact':
        return <ContactPage />;
      case 'select-technician':
        return <SelectTechnician />;
      default:
        return <SpaHomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <AppLayout onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage}>
          {renderPage()}
        </AppLayout>
      )}
    </LanguageProvider>
  );
}

export default App;