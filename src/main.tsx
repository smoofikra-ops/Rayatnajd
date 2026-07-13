import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SettingsProvider } from './contexts/SettingsContext';
import { InterestListProvider } from './contexts/InterestListContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <InterestListProvider>
        <App />
      </InterestListProvider>
    </SettingsProvider>
  </StrictMode>,
);
