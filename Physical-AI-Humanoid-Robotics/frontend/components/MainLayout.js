import React from 'react';
import FixedAIChatbot from './FixedAIChatbot';
import Navbar from './Navbar';
import BabyPinkNavbar from './BabyPinkNavbar';
import { UserProvider } from '../src/contexts/UserContext';

const MainLayout = ({ children, showAIChatbot = true }) => {
  return (
    <UserProvider>
      <div className="relative min-h-screen bg-[var(--background-color)]">
        <Navbar />
        <main className="pt-16 pb-24">
          {children}
        </main>
        {showAIChatbot && <FixedAIChatbot />}
      </div>
    </UserProvider>
  );
};

export default MainLayout;