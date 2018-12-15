// Lib Dependencies
import {
    createSignalAction
    // createDeltaAction,
    // createActionCreator
} from 'lib/redux';

// Module Name
export const MODULE_NAME = 'COCKPIT';

// Action Types
export const CONFIG_AUTH = 'CONFIG_AUTH';
export const CONFIG_PUBSUB = 'CONFIG_PUBSUB';
export const SEND_CONTROL = 'SEND_CONTROL';
// export const LEFT_KEY_DOWN = 'LEFT_KEY_DOWN';
// export const LEFT_KEY_UP = 'LEFT_KEY_UP';
// export const RIGHT_KEY_DOWN = 'RIGHT_KEY_DOWN';
// export const RIGHT_KEY_UP = 'RIGHT_KEY_UP';
// export const UP_KEY_DOWN = 'UP_KEY_DOWN';
// export const UP_KEY_UP = 'UP_KEY_UP';
// export const DOWN_KEY_DOWN = 'DOWN_KEY_DOWN';
// export const DOWN_KEY_UP = 'DOWN_KEY_UP';

// Signals
export const configAuthSignal = createSignalAction(MODULE_NAME, CONFIG_AUTH);
export const configPubSubSignal = createSignalAction(MODULE_NAME, CONFIG_PUBSUB);
export const sendControlSignal = createSignalAction(MODULE_NAME, SEND_CONTROL);
// export const leftKeyDownSignal = createSignalAction(MODULE_NAME, LEFT_KEY_DOWN);
// export const leftKeyUpSignal = createSignalAction(MODULE_NAME, LEFT_KEY_UP);
// export const rightKeyDownSignal = createSignalAction(MODULE_NAME, RIGHT_KEY_DOWN);
// export const rightKeyUpSignal = createSignalAction(MODULE_NAME, RIGHT_KEY_UP);
// export const upKeyDownSignal = createSignalAction(MODULE_NAME, UP_KEY_DOWN);
// export const upKeyUpSignal = createSignalAction(MODULE_NAME, UP_KEY_UP);
// export const downKeyDownSignal = createSignalAction(MODULE_NAME, DOWN_KEY_DOWN);
// export const downKeyUpSignal = createSignalAction(MODULE_NAME, DOWN_KEY_UP);


// Deltas
// export const UPDATE_APPLICATION_STATE_DELTA =
//     createDeltaAction(MODULE_NAME, UPDATE_APPLICATION_STATE);
// export const UPDATE_ERROR_STATE_DELTA = createDeltaAction(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
// export const updateApplicationState = createActionCreator(UPDATE_APPLICATION_STATE_DELTA);
// export const updateErrorState = createActionCreator(UPDATE_ERROR_STATE_DELTA);
