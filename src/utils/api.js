import Keys from "./storageKeys";
import { getLocalStorageItem, getUUID, setLocalStorageItem } from "./utils";

/**
 * Function logs in user and saves returned user data 
 * and API token in local storage
 */
const login = (username, password, callback) => {
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
    callback({ token: data.AuthorizationToken, user: data.User });
  }).catch(err => err.then(callback({err: true, data: err})));
};

/**
 * Function logs in anonymus user and saves returned token
 * in local storage
 */
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

/**
 * Function returns video data for player
 */
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

/**
 * Function returns videos for media lists
 */
const getMedia = (setter, token) => {
  const fetch1 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 2,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())

  const fetch2 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 3,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())

  const fetch3 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 3,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())
  
  Promise.all([fetch1, fetch2, fetch3]).then((data) => setter(data)).catch(err => console.log(err))
};

export { login, watch, loginAnon, getMedia };