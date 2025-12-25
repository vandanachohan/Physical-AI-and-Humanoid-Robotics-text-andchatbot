import React from 'react';
import OriginalDocPage from '@theme-original/DocPage';
import { UserProvider } from '../contexts/UserContext';
import { TranslationProvider } from '../contexts/TranslationContext';

const DocPage = (props) => {
  return (
    <UserProvider>
      <TranslationProvider>
        <OriginalDocPage {...props} />
      </TranslationProvider>
    </UserProvider>
  );
};

export default DocPage;