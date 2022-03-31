import Keys from "./storageKeys";

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

const watch = async (media, callback) => {

  const userId = getLocalStorageItem(Keys['USER']).Id;
  fetch('https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getLocalStorageItem(Keys['API_TOKEN']).Token}`
    },
    body: JSON.stringify({
      'MediaId': media.Id,
      'StreamType': userId !== -999 ? 'MAIN' : 'TRIAL'
    })
  }).then(res => {
    if (res.status !== 200) throw res.json();
    return res.json();
  })
    .then(data => {
      callback(data);
    })
    .catch(err => err.then(data => callback({err: true, data})));
};

export { getUUID, setLocalStorageItem, getLocalStorageItem, watch };
