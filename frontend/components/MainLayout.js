import React from 'react';
import FixedAIChatbot from './FixedAIChatbot';
import Navbar from './Navbar';
import BabyPinkNavbar from './BabyPinkNavbar';

const MainLayout = ({ children, showAIChatbot = true, theme = 'default' }) => {
  const NavigationBar = theme === 'baby-pink' ? BabyPinkNavbar : Navbar;

  return (
    <div className={`relative min-h-screen ${theme === 'baby-pink' ? 'bg-[#fff8f7]' : 'bg-[var(--background-color)]'}`}>
      <NavigationBar />
      <main className="pt-16 pb-24">
        {children}
      </main>
      {showAIChatbot && <FixedAIChatbot />}
    </div>
  );
};

export default MainLayout;