/**
 * Data Layer type definition
 * @typedef {Object[]} window.dataLayer
 * */

/**
 * Data Layer Event type definition
 * @typedef {Object} DataLayerEvent
 * @property {string} event - The name of the event, typically gaEvent.
 * @property {string} category - The name of the category of event.
 * @property {string} action - The name of the action of event.
 * @property {string} label - The name of the label of event.
 * */

function setupDataLayerEventClickButton() {

  const buttons = document.querySelectorAll('.js-btn-data-layer');

  if (!buttons.length) {

    return;
  }

  buttons.forEach((button) => {

    button.addEventListener('click', (clickEvent) => {

      const nameDataLayerAction = 'data-fmd-datalayer-action';
      const linkDataLayerAction = clickEvent.currentTarget.getAttribute(
          nameDataLayerAction);

      if (!linkDataLayerAction) {

        throw new Error(`Adicione atributo ${ nameDataLayerAction } com seu valor`);
      }

      const dataLayerClickEvent = genarateDataLayerEvent({ action: linkDataLayerAction });
      updateDataLayer(dataLayerClickEvent);
    });
  });
}

/**
 * Generate Data Layer Event
 * @param {DataLayerEvent} options - Data Layer event options
 * @return {DataLayerEvent} - The new (or udpated) Data Layer event options
 * */
function genarateDataLayerEvent(options) {

  return {
    ...options,
    event: options.event || 'gaEvent',
    category: options.category || 'clique',
    action: options.action || '',
    label: options.label || 'enviado',
  };
}

/**
 * Pass an object to update Data Layer
 * @param {DataLayerEvent} dataToBePushed
 * */
function updateDataLayer(dataToBePushed) {

  const hasDataLayer = !!window.dataLayer && !!window.dataLayer.length;

  if (hasDataLayer) {

    window.dataLayer = [
      ...window.dataLayer,
      dataToBePushed,
    ];
    return;
  }

  window.dataLayer = [dataToBePushed];
}
