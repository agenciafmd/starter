function setupLightDarkModeController() {

  // SwitchElement
  const preferenceThemeElement = document.getElementById(
      'jsSwitchControllerLightDarkTheme');

  // Gets the theme value saved in localStorage
  const getPreferenceTheme = () => localStorage.getItem('theme');

  // Defines a new theme item by storing the theme type in localStorage
  const setPreferenceTheme = (theme) => localStorage.setItem('theme', theme);

  // Check if the system is set to a dark theme
  const systemDarkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  if (preferenceThemeElement) {

    preferenceThemeElement.addEventListener('change', (event) => {

      const theme = event.target.checked ? 'dark' : 'light';
      activatePreferenceTheme(theme);
      localStorage.setItem('themeToggleActive', event.target.checked ? 'true' : 'false');
    });
  }

  // Configures the theme system based on system preference
  function setupThemeSystem() {

    // Add an event listener for system theme changes
    systemDarkThemeMediaQuery.addEventListener('change', (event) => {

      updateThemeBasedOnSystemPreference(event);
      updateToggleThemeStatus();
    });

    updateThemeBasedOnSystemPreference(systemDarkThemeMediaQuery);
    updateToggleThemeStatus();

    // Update theme based on system preference
    function updateThemeBasedOnSystemPreference(element) {

      const theme = element.matches ? 'dark' : 'light';
      setPreferenceTheme(theme);
      setDataBSThemeAttributeInDocument(theme);
    }
  }

  // Enables the customer's preferred theme type
  function activatePreferenceTheme(theme) {

    setPreferenceTheme(theme);
    setDataBSThemeAttributeInDocument(theme);
  }

  // Set data-bs-theme=theme in Document
  function setDataBSThemeAttributeInDocument(theme) {

    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  // Check if the theme is dark to set the toggle as active or not
  function updateToggleThemeStatus() {

    if (!preferenceThemeElement) {

      return;
    }

    preferenceThemeElement.checked = getPreferenceTheme() === 'dark';
  }

  window.addEventListener('load', () => {

    // Activates the customer's preferred theme when the page loads
    if (preferenceThemeElement && localStorage.getItem('themeToggleActive') === 'true') {

      updateToggleThemeStatus();
      return;
    }

    activatePreferenceTheme(getPreferenceTheme());
    setupThemeSystem();
  });
}