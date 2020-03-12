/**
 * WebStorage GML Extension
 * Written by Chris "Topher" Anselmo, 2017
 */

/**
 * Determine if a storage type is available
 * @param {string} type 'localStorage' or 'sessionStorage'
 */
function storage_available(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch(e) {
    return !!(e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage.length !== 0);
  }
}

/**
 * Stores a value in web storage
 * @param {string} key Key to store
 * @param {string} value Value to pair with key
 * @param {string} type Storage type
 */
function storage_set(key, value, type) {
  switch(type) {
    case 'localStorage':
      localStorage.setItem(key, value);
      break;
    case 'sessionStorage':
      sessionStorage.setItem(key, value);
      break;
  }
}

/**
 * Gets a value from web storage
 * @param {string} key Key to get from
 * @param {*} def Default value to return if value doesn't exist
 * @param {string} type Storage type
 */
function storage_get(key, def, type) {
  switch(type) {
    case 'localStorage':
      return localStorage.getItem(key) || (def + '');
      break;
    case 'sessionStorage':
      return sessionStorage.getItem(key) || (def + '');
      break;
  }
}

/**
 * Determines if a key has been stored with a value
 * @param {string} key Key to check
 * @param {string} type Storage type
 */
function storage_exists(key, type) {
  switch(type) {
    case 'localStorage':
      return !!localStorage.getItem(key);
      break;
    case 'sessionStorage':
      return !!sessionStorage.getItem(key);
      break;
  }
}

/**
 * Removes an item from local storage
 * @param {string} key Key to check
 * @param {string} type Storage type
 */
function storage_remove(key, type) {
  switch(type) {
    case 'localStorage':
      localStorage.removeItem(key);
      break;
    case 'sessionStorage':
      sessionStorage.removeItem(key);
      break;
  }
}