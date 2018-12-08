// NPM Dependencies
import { fork, throttle, call } from 'redux-saga/effects';

import {
    leftKeyDownSignal,
    leftKeyUpSignal,
    rightKeyDownSignal,
    rightKeyUpSignal,
    upKeyDownSignal,
    upKeyUpSignal,
    downKeyDownSignal,
    downKeyUpSignal
} from './actions';

export function* chill({ payload, type }) {
    yield call(console.log('payload', payload));
    yield call(console.log('type', type));
}

export function* watchLeftKeyDownSignal() {
    yield throttle(
        500,
        leftKeyDownSignal.REQUEST,
        chill
    );
}

export function* watchLeftKeyUpSignal() {
    yield throttle(
        500,
        leftKeyUpSignal.REQUEST,
        chill
    );
}

export function* watchRightKeyDownSignal() {
    yield throttle(
        500,
        rightKeyDownSignal.REQUEST,
        chill
    );
}

export function* watchRightKeyUpSignal() {
    yield throttle(
        500,
        rightKeyUpSignal.REQUEST,
        chill
    );
}

export function* watchUpKeyDownSignal() {
    yield throttle(
        500,
        upKeyDownSignal.REQUEST,
        chill
    );
}

export function* watchUpKeyUpSignal() {
    yield throttle(
        500,
        upKeyUpSignal.REQUEST,
        chill
    );
}

export function* watchDownKeyDownSignal() {
    yield throttle(
        500,
        downKeyDownSignal.REQUEST,
        chill
    );
}

export function* watchDownKeyUpSignal() {
    yield throttle(
        500,
        downKeyUpSignal.REQUEST,
        chill
    );
}

export default [
    fork(watchLeftKeyDownSignal),
    fork(watchLeftKeyUpSignal),
    fork(watchRightKeyDownSignal),
    fork(watchRightKeyUpSignal),
    fork(watchUpKeyDownSignal),
    fork(watchUpKeyUpSignal),
    fork(watchDownKeyDownSignal),
    fork(watchDownKeyUpSignal)
];
