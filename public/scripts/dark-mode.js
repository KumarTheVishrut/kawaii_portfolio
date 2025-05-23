/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

/**
 * Simple dark mode toggle utility
 * This script executes immediately to prevent flash of incorrect theme
 */

// Execute this immediately, but only in browser
(function() {
  // Check if running in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  try {
    // Get dark mode preference from localStorage or system preference
    const storedDarkMode = localStorage.getItem('darkMode');
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = storedDarkMode === 'true' || (storedDarkMode === null && systemDarkMode);
    
    // Apply theme immediately to <html> element
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('darkMode', 'false');
    }
    
    // Log status for debugging
    console.log('Theme initialized: ' + (isDarkMode ? 'dark' : 'light'));
  } catch (e) {
    console.error('Error initializing dark mode:', e);
  }
})();

// Make toggle function available globally for UI elements
if (typeof window !== 'undefined') {
  window.toggleDarkMode = function() {
    try {
      const isDarkMode = document.documentElement.classList.contains('dark-theme');
      
      if (isDarkMode) {
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('darkMode', 'false');
        console.log('Theme toggled to: light');
        return false;
      } else {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('darkMode', 'true');
        console.log('Theme toggled to: dark');
        return true;
      }
    } catch (e) {
      console.error('Error toggling dark mode:', e);
      return false;
    }
  };
} 