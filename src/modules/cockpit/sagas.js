// NPM Dependencies
import { fork, throttle, takeLatest, put, call, all } from 'redux-saga/effects';

// Module Dependencies
import { initApplicationSignal } from 'modules/app/actions';

// Local Dependencies
import {
    // configAuthSignal,
    configPubSubSignal,
    sendControlSignal
} from './actions';
import { configurePubSub, sendControl, connectToChannel } from './services';

export function* sendControlOnRequest({ payload }) {
    try {
        const { control } = payload;
        console.log('control', control);

        yield call(sendControl, { control });

        yield put(sendControlSignal.success({ control }));
    } catch (error) {
        yield put(sendControlSignal.failure({ error }));
    }
}

export function* watchSendControlSignal() {
    yield throttle(
        500,
        sendControlSignal.REQUEST,
        sendControlOnRequest
    );
}

// export function* initAuthOnRequest() {
//     try {
//         yield call(configureAuth);
//
//         yield put(configAuthSignal.success());
//     } catch (error) {
//         yield put(configAuthSignal.failure({ error }));
//     }
// }
//
// export function* watchInitAuthSignal() {
//     yield takeLatest(
//         initApplicationSignal.SUCCESS,
//         initAuthOnRequest
//     );
// }

export function* initPubSubOnRequest() {
    try {
        yield call(configurePubSub);

        yield call(connectToChannel);

        yield put(configPubSubSignal.success());
    } catch (error) {
        yield put(configPubSubSignal.failure({ error }));
    }
}

export function* watchInitPubSubSignal() {
    yield takeLatest(
        initApplicationSignal.SUCCESS,
        initPubSubOnRequest
    );
}

export default [
    fork(watchInitPubSubSignal),
    fork(watchSendControlSignal)
];
