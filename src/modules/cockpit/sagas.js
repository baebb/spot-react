// NPM Dependencies
import { fork, throttle, takeLatest, put, call } from 'redux-saga/effects';

// Module Dependencies
import { initApplicationSignal } from 'modules/app/actions';

// Local Dependencies
import {
    // configAuthSignal,
    configPubSubSignal,
    sendControlSignal
    // getUserCountSignal
} from './actions';
import { configurePubSub, sendControl, getCurrentUsers, watchPresence } from './services';

export function* sendControlOnRequest({ payload }) {
    try {
        const { control } = payload;

        const publishControl = yield call(sendControl, { control });

        yield put(sendControlSignal.success(publishControl));
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
        const pubsubConnect = yield call(configurePubSub);

        yield put(configPubSubSignal.success(pubsubConnect));

        yield call(watchPresence);
    } catch (error) {
        yield put(configPubSubSignal.failure({ error }));
    }
}

export function* watchAppInitSuccessSignal() {
    yield takeLatest(
        initApplicationSignal.SUCCESS,
        initPubSubOnRequest
    );
}

// export function* checkCurrentUsersOnRequest() {
//     try {
//         const getUserCount = yield call(getCurrentUsers);
//
//         console.log('getUserCount:', getUserCount);
//
//         yield put(getUserCountSignal.success({ getUserCount }));
//     } catch (error) {
//         yield put(getUserCountSignal.failure({ error }));
//     }
// }

export function* watchPubSubSuccessSignal() {
    yield takeLatest(
        configPubSubSignal.SUCCESS,
        // checkCurrentUsersOnRequest
    );
}

export default [
    fork(watchAppInitSuccessSignal),
    fork(watchSendControlSignal)
];
