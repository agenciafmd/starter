function setupLightDarkModeController() {

  const preferenceThemeElement = document.getElementById('jsSwitchControllerLightDarkTheme');

  if (!preferenceThemeElement) {
    throw new Error(
      'Sorry, we couldn\'t find toggle element for light and dark theme :(');
  }

  // Gets the theme value saved in localStorage
  const getPreferenceTheme = () => localStorage.getItem('theme');
  // Defines a new theme item by storing the theme type in localStorage
  const setPreferenceTheme = (theme) => localStorage.setItem('theme', theme);

  preferenceThemeElement.addEventListener('change', (event) => {

    event.target.checked ? activatePreferenceTheme('dark') : activatePreferenceTheme('light');
  });

  // Enables the customer's preferred theme type
  function activatePreferenceTheme(theme) {

    setPreferenceTheme(theme);
    setDataBSThemeAttributeInDocument(theme);
  }

  // Set data-bs-theme=theme in Document
  function setDataBSThemeAttributeInDocument(theme) {

    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  // Check the client's theme preference in the localStorage
  function verifyPreferenceClientTheme() {

    activatePreferenceTheme(getPreferenceTheme());
  }

  // Check if the theme is dark to set the toggle as active or not
  function updateToggleThemeStatus() {

    getPreferenceTheme() === 'dark' ? preferenceThemeElement.checked = true : preferenceThemeElement.checked = false;
  }

  window.addEventListener('load', () => {

    updateToggleThemeStatus();
    verifyPreferenceClientTheme();
  });
}
