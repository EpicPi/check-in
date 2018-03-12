import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router";

export const USER = Object.freeze({HOST: 'host', GUEST: 'guest'});
export const JOIN_FIND = Object.freeze({
    CHECKING: 'checking',
    SUCCESS: 'success',
    FAIL: 'fail',
    NOTHING_TO_CHECK: 'nothing',
    ALREADY_JOINED: 'already_joined'
});

export const CHECK_CODE = Object.freeze({
    CHECKING: 'checking',
    AVAILABLE: 'avaliable',
    TAKEN: 'taken',
    NOTHING_TO_CHECK: 'nothing',
});

export const LOAD = Object.freeze({
    LOADING: 'loading',
    NOTHING: 'nothing'
});

export const TODAY = new Date().toISOString().slice(0,10);

export function dateStringToHours(date) {
    let hours = ('0' + (new Date(date).getHours())).slice(-2);
    let mins = ('0' + (new Date(date).getMinutes())).slice(-2);
    return hours + ':' + mins;
}

export function dateStringToDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

export function dateTimeToDate(date, time) {
    return new Date(date + ' ' + time);
}
