// Vercel Web Analytics integration for MkDocs site
// This script loads and initializes Vercel Web Analytics for visitor tracking

(function() {
  // Initialize Web Analytics when the page loads
  // The script will automatically track page views and visitor data
  
  // Check if document$ observable exists (Material for MkDocs)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      loadWebAnalytics();
    });
  } else {
    // Fallback for when Material theme's instant loading is not available
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadWebAnalytics);
    } else {
      loadWebAnalytics();
    }
  }
  
  function loadWebAnalytics() {
    // Initialize the Vercel Analytics queue
    window.va = window.va || function () { 
      (window.vaq = window.vaq || []).push(arguments); 
    };
    
    // Dynamically load the Web Analytics module
    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics@1/dist/index.mjs';
      inject();
    `;
    document.head.appendChild(script);
  }
})();
