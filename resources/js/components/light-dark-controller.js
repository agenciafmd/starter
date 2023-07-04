function setupLightDarkModeController() {

  const preferenceThemeElement = document.getElementById('jsSwitchControllerLightDarkTheme');

  if (!preferenceThemeElement) {
    throw new Error(
      'Sorry, we couldn\'t find toggle element for light and dark theme :(');
  }

  // Gets the theme value saved in localStorage
  const getStoragedTheme = () => localStorage.getItem('theme');
  // Defines a new theme item by storing the theme type in localStorage
  const setStoragedTheme = (theme) => localStorage.setItem('theme', theme);

  preferenceThemeElement.addEventListener('change', (event) => {

    event.target.checked ? activePreferedTheme('dark') : activePreferedTheme('light');
  });

  // Enables the customer's preferred theme type
  function activePreferedTheme(theme) {

    setStoragedTheme(theme);
    setDataBSThemeAttributeInDocument(theme);
  }

  // Set data-bs-theme=theme in Document
  function setDataBSThemeAttributeInDocument(theme) {

    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  // Check the client's theme preference in the localStorage
  function verifyPreferenceClientTheme() {

    activePreferedTheme(getStoragedTheme());
  }

  // Check if the theme is dark to set the toggle as active or not
  function updateToggleThemeStatus() {

    getStoragedTheme() === 'dark' ? preferenceThemeElement.checked = true : preferenceThemeElement.checked = false;
  }

  window.addEventListener('load', () => {

    updateToggleThemeStatus();
    verifyPreferenceClientTheme();
  });
}
