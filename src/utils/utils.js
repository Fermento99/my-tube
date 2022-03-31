import Keys from "./storageKeys";

/**
 * Function generates new UUID if it wasn't generated yet 
 * and returns it
 */
const getUUID = () => {
  let uuid = getLocalStorageItem(Keys['UUID']);
  if (!uuid) {
    uuid = crypto.randomUUID();
    setLocalStorageItem(Keys['UUID'], uuid);
  }

  return uuid;
};

/**
 * Function restores JSON objects from local storage 
 */
const getLocalStorageItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

/**
 * Function saves JSON objects to local storage 
 */
const setLocalStorageItem = (key, item) => {
  window.localStorage.setItem(key, JSON.stringify(item));
};



export { getUUID, setLocalStorageItem, getLocalStorageItem };
