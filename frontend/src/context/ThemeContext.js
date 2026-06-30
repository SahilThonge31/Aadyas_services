import React, { createContext, useContext, useState, useEffect } from 'react'

// Define your palettes (with the 3 new ones added)
export const palettes = {
  green: 'Green (Default)',
  blue: 'Ocean Blue',
  rose: 'Sweet Rose',
  teal: 'Corporate Teal',
  sandstone: 'Warm Sandstone',
  lavender: 'Lavender Gray',
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light') // 'light' or 'dark'
  const [palette, setPalette] = useState('green') // 'green', 'blue', 'rose', etc.

  // Effect to update the <html> element
  useEffect(() => {
    const root = window.document.documentElement

    // Handle dark mode
    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    // Handle palette
    root.setAttribute('data-palette', palette)
  }, [theme, palette])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, palette, setPalette, palettes }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext)
}