// Vercel Speed Insights integration for MkDocs site
// This script loads and initializes Vercel Speed Insights for performance monitoring

(function() {
  // Initialize Speed Insights when the page loads
  // The script will automatically collect Core Web Vitals and send them to Vercel
  
  // Check if document$ observable exists (Material for MkDocs)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      loadSpeedInsights();
    });
  } else {
    // Fallback for when Material theme's instant loading is not available
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadSpeedInsights);
    } else {
      loadSpeedInsights();
    }
  }
  
  function loadSpeedInsights() {
    // Dynamically load the Speed Insights module
    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@1/dist/index.mjs';
      injectSpeedInsights();
    `;
    document.head.appendChild(script);
  }
})();
