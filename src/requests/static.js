export const Image = {
  AUTH_BG_LIGHT: "bg-light-img.jpg",
  AUTH_BG_DARL: "bg-dark-img.jpg"
}

export function getDomain () {
  return `http://localhost`
}

export function getStatic () {
  return `${getDomain()}/static`;
}

export function getImage (name) {
  return `${getStatic()}/assets/images/${name}`;
}

export function getAuth () {
  return `${getDomain()}/auth`
}


