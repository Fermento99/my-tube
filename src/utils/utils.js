
const getUUID = () => {
  let uuid = getLocalStorageItem('MT_UUID');
  if (!uuid) {
    uuid = crypto.randomUUID();
    setLocalStorageItem('MT_UUID', uuid);
  }

  return uuid;
};

const getLocalStorageItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

const setLocalStorageItem = (key, item) => {
  window.localStorage.setItem(key, JSON.stringify(item));
};



export { getUUID, setLocalStorageItem, getLocalStorageItem };
