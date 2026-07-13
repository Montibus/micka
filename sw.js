self.addEventListener('fetch', function(event) {
  // Required by Chrome to trigger the PWA Install Prompt.
  // We leave it empty as we do not need offline caching for this app.
});
