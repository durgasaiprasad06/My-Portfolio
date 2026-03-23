import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [direction, setDirection] = useState('forward'); // 'forward' or 'backward'

  return (
    <NavigationContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavigationContext.Provider>
  );
};
