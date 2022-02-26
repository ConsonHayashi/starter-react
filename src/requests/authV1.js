import {
  getGetOption,
  getPostOption,
  getPutOption,
} from './options';
import { getAuth } from './static';

export const login = (user, window) => {
  const url = `${getAuth()}/v1/any/auth/signin`;
  return fetch(url, getPostOption(user, window));
}

export const logup = (user, window) => {
  const url = `${getAuth()}/v1/any/auth/signup`;
  return fetch(url, getPostOption(user, window));
}

export const resetPass = (user, window) => {

  const url = `${getAuth()}/v1/any/auth/pass`;
  return fetch(url, getPutOption(user, window));
}

export const getVerfication = (user, window) => {
  const url = `${getAuth()}/v1/any/auth/code?email=${user.email}`;
  return fetch(url, getGetOption(window));
}

export const getUsername = (user, window) => {
  const url = `${getAuth()}/v1/any/auth/name?email=${user.email}&code=${user.code}`;
  return fetch(url, getGetOption(window));
}
