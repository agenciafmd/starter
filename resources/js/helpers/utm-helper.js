function setupUtmHelpers() {

  const decodedUrlSearchParams =
      decodeURIComponent(window.location.search.substring(1));

  const urlSearchParamsList = decodedUrlSearchParams.split('&');

  const utmObject = _createUtmObject();

  function _createUtmObject() {

    return urlSearchParamsList
        .reduce((previous, currentParam) => {

          const splattedParam = currentParam.split('=');
          const paramKey = splattedParam[0];
          const paramValue = splattedParam[1];

          return {
            ...previous,
            [paramKey]: paramValue,
          };
        }, {});
  }

  function hasUtmParameter(searchTerm) {

    return !!utmObject[searchTerm];
  }

  function getUtmValueFromUrl(searchTerm) {

    return utmObject[searchTerm];
  }

  function setCookie({ name, value, expirationInDays }) {

    if (!expirationInDays) {

      // Default cookie expiration
      expirationInDays = 30;
    }

    const date = new Date();
    date.setTime(date.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  function getCookieByName(cookieName) {

    // Got from StackOverflow - https://stackoverflow.com/a/15724300/5542331
    const value = `; ${ document.cookie }`;
    const parts = value.split(`; ${ cookieName }=`);

    if (parts.length === 2) {

      return parts.pop().split(';').shift();
    }
  }

  function manageUtmHelpers() {

    function setCookieFromUrl(cookieName) {

      if (!hasUtmParameter(cookieName)) {

        return;
      }

      setCookie({
        name: cookieName,
        value: getUtmValueFromUrl(cookieName),
      });
    }

    function setupUtmSource() {

      setCookie({
        name: 'utm_today',
        value: 1,
      });

      const hasUtmSourceInUrl = !!getUtmValueFromUrl('utm_source');
      const hasUtmTodayInStorage = !!getCookieByName('utm_today');
      const hasReferrer = !!document.referrer;
      const hasComeFromGoogleSearch = document.referrer.search('google') > 0;

      if (!hasUtmSourceInUrl && !hasUtmTodayInStorage && hasReferrer && hasComeFromGoogleSearch) {

        setCookie({
          name: 'utm_source',
          value: 'google',
        });

        setCookie({
          name: 'utm_medium',
          value: 'organic',
        });
        return;
      }

      if (!hasUtmSourceInUrl && !hasUtmTodayInStorage && hasReferrer) {

        setCookie({
          name: 'utm_source',
          value: 'referral',
        });

        setCookie({
          name: 'utm_medium',
          value: document.referrer,
        });
        return;
      }

      setCookieFromUrl('utm_source');
    }

    // This is specific because it has additional logic
    setupUtmSource();
    setCookieFromUrl('utm_medium');
    setCookieFromUrl('utm_campaign');
    setCookieFromUrl('utm_term');
    setCookieFromUrl('utm_content');
    setCookieFromUrl('gclid');
  }

  manageUtmHelpers();
}
