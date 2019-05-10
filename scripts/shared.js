(() => {
  'use strict';

  window.Logger = class Logger {

    constructor(container) {
      if (!container) {
        throw new Error();
      }
  
      this._container = container;    
    }
  
    write(message) {
      const element = document.createElement('div');
      element.classList.add('row');
      element.innerText = message || ' ';
      this._container.appendChild(element);
    }
  
  }
  
  window.showResult = (records, logger) => {
  
    // Result
    for (const type in records) {
      const times = [];
      for (const [start, end] of records[type]) {
        times.push(end - start);
      }
      times.sort((a, b) => a - b);
  
      logger.write(`${type} min: ${times[times.length - 1]}ms`);
      logger.write(`${type} max: ${times[0]}ms`);
      logger.write(`${type} avg: ${times.slice(0, 5).reduce((s, v) => s + v, 0) / 5}ms`);
      logger.write(null);
    }
  
  };
  
})();
