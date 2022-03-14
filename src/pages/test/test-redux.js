import './test.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { Center } from '../../components/contriant/center';
import { Page } from '../../components/contriant/pages';
import {
  decrement,
  increment,
} from '../../states/counterSlice';

export function TestRedux () {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Page>
      <Center>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </Center>
    </Page>
  )
}
