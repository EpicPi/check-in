import React from 'react';

export const USER = Object.freeze({ HOST: 'host', GUEST: 'guest' });
export const JOIN_FIND = Object.freeze({
  CHECKING: 'checking',
  SUCCESS: 'success',
  FAIL: 'fail',
  NOTHING: 'nothing',
  ALREADY_JOINED: 'already_joined'
});

export const CHECK_CODE = Object.freeze({
  CHECKING: 'checking',
  AVAILABLE: 'avaliable',
  TAKEN: 'taken',
  NOTHING: 'nothing'
});

export const LOAD = Object.freeze({
  LOADING: 'loading',
  NOTHING: 'nothing'
});

export const EVENT_TYPES = Object.freeze({
  BASIC: 'basic',
  CODE: 'code',
  OPEN: 'open'
});

export const CHECK_CHECKIN = Object.freeze({
  CHECKING: 'checking',
  SUCCESS: 'success',
  FAIL: 'fail',
  NOTHING_TO_CHECK: 'nothing'
});

export const DAYS = Object.freeze([
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]);
