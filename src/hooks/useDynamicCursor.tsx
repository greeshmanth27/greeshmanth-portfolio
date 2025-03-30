
import React, { useEffect, useState } from 'react';

// List of HTTP status codes with descriptions
const httpCodes = {
  '100': { text: 'CONTINUE', color: '#F59E0B' },
  '200': { text: 'OK', color: '#A855F7' },
  '201': { text: 'CREATED', color: '#10B981' },
  '202': { text: 'ACCEPTED', color: '#7DD3FC' },
  '204': { text: 'NO CONTENT', color: '#6B7280' },
  '206': { text: 'PARTIAL', color: '#38BDF8' },
  '301': { text: 'MOVED', color: '#F97316' },
  '302': { text: 'FOUND', color: '#10B981' },
  '304': { text: 'NOT MODIFIED', color: '#64748B' },
  '400': { text: 'BAD REQUEST', color: '#EF4444' },
  '401': { text: 'UNAUTHORIZED', color: '#F43F5E' },
  '403': { text: 'FORBIDDEN', color: '#DC2626' },
  '404': { text: 'NOT FOUND', color: '#F43F5E' },
  '418': { text: 'TEAPOT', color: '#E879F9' },
  '500': { text: 'SERVER ERROR', color: '#DC2626' },
  'EOF': { text: 'EOF', color: '#64748B' },
  'GET': { text: 'GET', color: '#3B82F6' },
  'POST': { text: 'POST', color: '#06B6D4' },
  'PUT': { text: 'PUT', color: '#8B5CF6' },
  'DELETE': { text: 'DELETE', color: '#F43F5E' },
};

type HttpCode = keyof typeof httpCodes;

export const useDynamicCursor = () => {
  const [lastInteraction, setLastInteraction] = useState<{
    code: HttpCode;
    timestamp: number;
  }>({ code: '200', timestamp: Date.now() });
  
  // Function to update cursor position
  const updateCursorPosition = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  };
  
  // Function to update HTTP code
  const updateHttpCode = (code: HttpCode) => {
    setLastInteraction({ code, timestamp: Date.now() });
    document.documentElement.style.setProperty('--http-code', `"${code} ${httpCodes[code].text}"`);
    document.documentElement.style.setProperty('--http-color', httpCodes[code].color);
  };
  
  // Initialize hover observers
  useEffect(() => {
    // Update cursor position on mouse move
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Set initial HTTP code
    updateHttpCode('200');
    
    // Create element type to HTTP code mapping
    const elementToCodeMap: Record<string, HttpCode> = {
      'a': '301',
      'button': '200',
      'input': '418',
      'textarea': '418',
      'img': '301',
      'nav': '302',
      'form': 'POST',
      'h1': '100',
      'h2': '100',
      'h3': '100',
      'footer': 'EOF',
      'table': '206',
    };
    
    // Track most recently hovered elements to determine the right code
    const handleElementHover = (e: MouseEvent) => {
      const path = e.composedPath();
      
      // Check for specific data attributes first
      for (const element of path) {
        if (!(element instanceof HTMLElement)) continue;
        
        // Check for data-http-code attribute which takes highest priority
        const customCode = element.getAttribute('data-http-code');
        if (customCode && httpCodes[customCode as HttpCode]) {
          updateHttpCode(customCode as HttpCode);
          return;
        }
        
        // Check for data-profile attribute
        if (element.hasAttribute('data-profile')) {
          updateHttpCode('301');
          return;
        }
      }
      
      // Check for element types
      for (const element of path) {
        if (!(element instanceof HTMLElement)) continue;
        
        // Special case for charts
        if (element.classList.contains('recharts-wrapper') || 
            element.classList.contains('recharts-surface')) {
          updateHttpCode('202');
          return;
        }
        
        // Check tag names
        const tagName = element.tagName.toLowerCase();
        if (elementToCodeMap[tagName]) {
          updateHttpCode(elementToCodeMap[tagName]);
          return;
        }
      }
      
      // Default to 200
      if (Date.now() - lastInteraction.timestamp > 500 && lastInteraction.code !== '200') {
        updateHttpCode('200');
      }
    };
    
    // Add debounced event listener for mouseover
    let debounceTimer: number;
    const debouncedHandleElementHover = (e: MouseEvent) => {
      clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => handleElementHover(e), 50);
    };
    
    window.addEventListener('mouseover', debouncedHandleElementHover);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', debouncedHandleElementHover);
      clearTimeout(debounceTimer);
    };
  }, [lastInteraction]);
  
  return null; // This hook doesn't return anything, it just adds effects
};
