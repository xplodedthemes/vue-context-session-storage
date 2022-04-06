import sessionStorage from './src/sessionStorage';
import mockStorage from './src/mockStorage';

// ------------------------------------------------------
// Init
// ------------------------------------------------------

if (!window.sessionStorage) {
    window.sessionStorage = mockStorage;
}

const STORAGE = {
  install (Vue, sessionKey) {
    Vue.prototype.$session = new sessionStorage(sessionKey)
  }
}

module.exports = STORAGE
