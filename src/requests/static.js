

export function getDomain () {
  return `http://localhost`
}

export function getStatic () {
  return `${getDomain()}/static`;
}

export function getLoginBgImage () {
  return `${getStatic()}/login-bg.jpg`;
}

export function getAuth () {
  return `${getDomain()}/auth`
}


