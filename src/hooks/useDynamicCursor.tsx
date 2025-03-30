import React, { useEffect, useState } from 'react';

// List of HTTP status codes with descriptions
const httpCodes = {
  '100': { text: 'CONTINUE', color: '#F59E0B' },
  '200': { text: 'OK', color: '#A855F7' },
  '301': { text: 'MOVED', color: '#F97316' },
  '302': { text: 'FOUND', color: '#10B981' },
  '418': { text: 'TEAPOT', color: '#E879F9' },
  'EOF': { text: 'EOF', color: '#64748B' },
  'POST': { text: 'POST', color: '#06B6D4' },
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
      'a': '200',
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
    };

    // Track most recently hovered elements to determine the right code
    const handleElementHover = (e: MouseEvent) => {
      const path = e.composedPath();

      // Check for element types
      for (const element of path) {
        if (!(element instanceof HTMLElement)) continue;

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

    // Add event listener for mouseover
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [lastInteraction]);

  return null; // This hook doesn't return anything, it just adds effects
};