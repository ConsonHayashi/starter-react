



export const secretYourInfo = (requestBody) => {
  const DES_PROPERTY = 'password';
  const saltSerect = "fli";
  if (requestBody.hasOwnProperty(DES_PROPERTY)) {
    requestBody[DES_PROPERTY] = saltSerect + window.btoa(requestBody[DES_PROPERTY]);
  }
}

export const getJsonHeader = () => {
  const jsonHeader = new Headers();
  jsonHeader.append('content-type', 'application/json');
  const jwt = window.localStorage.getItem("jwt")
  if (jwt) {
    jsonHeader.append('Authorization', jwt);
  }
  return jsonHeader;
}


export const getPostOption = (obj) => {
  const newObj = { ...obj }
  secretYourInfo(newObj)
  const objStr = JSON.stringify(newObj)
  return { method: "POST", body: objStr, mode: "cors", headers: getJsonHeader() }
}

export const getPutOption = (obj) => {
  const newObj = { ...obj }
  secretYourInfo(newObj)
  const objStr = JSON.stringify(newObj)
  return { method: "PUT", body: objStr, mode: "cors", headers: getJsonHeader() }
}

export const getGetOption = () => {
  return { method: "GET", mode: "cors", headers: getJsonHeader() }
}
