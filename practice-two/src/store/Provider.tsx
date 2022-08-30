import React, { useState } from "react";

// Context
import Context from "./Context";

// Enum
import { THEME } from "../enums/enums";

function Provider({ children }: any) {
  const {Light, Dark} = THEME
  const [theme, setTheme] = useState(Light)

  const toggleTheme = () => {
    setTheme(theme === Dark ? Light : Dark)
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