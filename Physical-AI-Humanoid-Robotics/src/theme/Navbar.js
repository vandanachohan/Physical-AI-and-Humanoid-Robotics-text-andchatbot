import React from 'react';
import Navbar from '@theme-original/Navbar';
import LanguageToggle from '@site/src/components/LanguageToggle';
import { TranslationProvider } from '../contexts/TranslationContext';

// Wrap the original navbar with the translation provider
const NavbarWrapper = (props) => {
  return (
    <TranslationProvider>
      <div className="navbar-container">
        <Navbar {...props} />
        <LanguageToggle />
      </div>
    </TranslationProvider>
  );
};

export default NavbarWrapper;