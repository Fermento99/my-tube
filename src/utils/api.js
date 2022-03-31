import Keys from "./storageKeys";
import { getLocalStorageItem, getUUID, setLocalStorageItem } from "./utils";

const login = (username, password, setter) => {
  fetch('https://thebetter.bsgroup.eu/Authorization/SignIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'Username': username,
      'Password': password,
      "Device": {
        "PlatformCode": "WEB",
        "Name": getUUID(),
      }
    })
  }).then(res => {
    if (res.status !== 200) throw res.json();
    return res.json();
  }).then(data => {
    setLocalStorageItem(Keys['USER'], data.User);
    setLocalStorageItem(Keys['API_TOKEN'], data.AuthorizationToken);
    setter({ token: data.AuthorizationToken, user: data.User });
  }).catch(err => err.then(setter({err: true, data: err})));
};

const loginAnon = (setter) => {
  fetch('https://thebetter.bsgroup.eu/Authorization/SignIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Device": {
        "PlatformCode": "WEB",
        "Name": getUUID(),
      }
    })
  }).then(res => res.json())
    .then(data => {
      setLocalStorageItem(Keys['USER'], data.User);
      setLocalStorageItem(Keys['API_TOKEN'], data.AuthorizationToken);
      setter({ token: data.AuthorizationToken, user: data.User });
    });
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
    .catch(err => err.then(data => callback({ err: true, data })));
};

export { login, watch, loginAnon };