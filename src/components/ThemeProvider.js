'use client';

import { createContext, useContext } from 'react';
import clientData from '@/data/clientData.json';

const ThemeContext = createContext({ client: clientData });

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ client: clientData }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
