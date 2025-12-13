import React from 'react';
import MainLayout from './MainLayout';

const BabyPinkLayout = ({ children, showAIChatbot = true }) => {
  return (
    <MainLayout theme="baby-pink" showAIChatbot={showAIChatbot}>
      {children}
    </MainLayout>
  );
};

export default BabyPinkLayout;