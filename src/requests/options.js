
const saltSerect = "fli";
const DES_PROPERTY = 'password';

export const getDESCtypt = (password) => {
  return saltSerect + window.btoa(password);
}

export const getJsonHeader = (window) => {
  const jsonHeader = new Headers();
  jsonHeader.append('content-type', 'application/json');
  const jwt = window.localStorage.getItem("jwt");
  if (jwt) {
    jsonHeader.append('Authorization', jwt);
  }
  return jsonHeader;
}


export const getPostOption = (obj, window) => {
  const newObj = { ...obj }
  if (newObj.hasOwnProperty(DES_PROPERTY)) {
    newObj[DES_PROPERTY] = getDESCtypt(newObj[DES_PROPERTY]);
  }
  const objStr = JSON.stringify(newObj)
  const option = { method: "POST", body: objStr, mode: "cors", headers: getJsonHeader(window) }
  return option;
}

export const getPutOption = (obj, window) => {
  const newObj = { ...obj }
  if (newObj.hasOwnProperty(DES_PROPERTY)) {
    newObj[DES_PROPERTY] = getDESCtypt(newObj[DES_PROPERTY]);
  }
  const objStr = JSON.stringify(newObj)
  const option = { method: "PUT", body: objStr, mode: "cors", headers: getJsonHeader(window) }
  return option;
}

export const getGetOption = (window) => {
  const option = { method: "GET", mode: "cors", headers: getJsonHeader(window) }
  return option;
}
