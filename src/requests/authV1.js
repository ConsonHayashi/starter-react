import {
  getGetOption,
  getPostOption,
  getPutOption,
} from './options';
import { getAuth } from './static';

export const login = (user) => {
  const url = `${getAuth()}/v1/any/auth/signin`;
  return fetch(url, getPostOption(user));
}

export const logup = (user) => {
  const url = `${getAuth()}/v1/any/auth/signup`;
  return fetch(url, getPostOption(user));
}

export const resetPass = (user) => {
  const url = `${getAuth()}/v1/any/auth/pass`;
  return fetch(url, getPutOption(user));
}

export const getVerfication = (user) => {
  const url = `${getAuth()}/v1/any/auth/code?email=${user.email}`;
  return fetch(url, getGetOption());
}

export const getUsername = (user) => {
  const url = `${getAuth()}/v1/any/auth/name?email=${user.email}&code=${user.code}`;
  return fetch(url, getGetOption());
}
