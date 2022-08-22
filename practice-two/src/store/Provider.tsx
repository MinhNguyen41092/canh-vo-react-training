import React from 'react';
import { useState } from 'react';
import Context from "./Context";

function Provider({ children }: any) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Provider