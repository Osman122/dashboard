import React, { ReactNode, useEffect, useState } from 'react';
import ThemeContext from '../context/Theme';
import SideBar from '../components/side-bar';
import NavBar from '../components/navbar';

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  const [theme, setContextTheme] = useState(() => {
    // Retrieve the theme from localStorage or set a default theme
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setContextTheme }}>
      <div className="flex mx-0">
      <SideBar initialOpen={false} />
        <div className="container mt-0 w-screen">
          <NavBar />
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default RootLayout;