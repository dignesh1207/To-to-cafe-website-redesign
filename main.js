// TOTO CAFE — site behaviour
// Handles graceful fallback if the hotlinked logo image ever fails to load
// (e.g. no internet connection, or the source site blocks hotlinking).

document.addEventListener('DOMContentLoaded', function () {
  // Mobile hamburger menu: toggle the dropdown open/closed, and close it
  // again whenever a link inside is clicked (so it doesn't stay open after navigating).
  var navToggle = document.getElementById('navToggle');
  var navCenter = document.getElementById('navCenter');
  if (navToggle && navCenter) {
    navToggle.addEventListener('click', function () {
      var isOpen = navCenter.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    navCenter.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navCenter.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.addEventListener('error', function () {
      navLogo.style.display = 'none';
    });
  }

  var footLogo = document.getElementById('footLogo');
  var footLogoFallback = document.getElementById('footLogoFallback');
  if (footLogo && footLogoFallback) {
    footLogo.addEventListener('error', function () {
      footLogo.style.display = 'none';
      footLogoFallback.style.display = 'inline-block';
    });
  }
});
