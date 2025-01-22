function getCookiesAsObject() {
  return document.cookie
                 .split('; ')
                 .reduce((prev, next) => {
                   const splattedCookieString = next.split('=');
                   const key = splattedCookieString[0];
                   const value = splattedCookieString[1];
                   return {
                     ...prev,
                     [key]: value,
                   };
                 }, {});
}

function getCookieByName(cookieName) {

  // Got from StackOverflow - https://stackoverflow.com/a/15724300/5542331
  const value = `; ${ document.cookie }`;
  const parts = value.split(`; ${ cookieName }=`);

  if (parts.length === 2) {

    return parts.pop().split(';').shift();
  }
}

export function setupUtmHelpers() {

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

  function setInputValue({
    name,
    value,
  }) {
    const inputs = document.getElementsByName(name);

    [...inputs].map((input) => {
      input.value = value;
    });
  }

  function setCookie({
    name,
    value,
    expirationInDays,
  }) {

    if (!expirationInDays) {

      // Default cookie expiration
      expirationInDays = 30;
    }

    const date = new Date();
    date.setTime(date.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  function manageUtmHelpers() {

    function setUtm({
      name,
      value,
    }) {

      setCookie({
        name: name,
        value: value,
      });

      setInputValue({
        name: name,
        value: value,
      });
    }

    function setUtmFromUrl(utmName) {

      if (!hasUtmParameter(utmName)) {
        return;
      }

      setUtm({
        name: utmName,
        value: getUtmValueFromUrl(utmName),
      });
    }

    setUtmFromUrl('utm_source');
    setUtmFromUrl('utm_medium');
    setUtmFromUrl('utm_campaign');
    setUtmFromUrl('utm_term');
    setUtmFromUrl('utm_content');
    setUtmFromUrl('gclid');
  }

  manageUtmHelpers();
}
