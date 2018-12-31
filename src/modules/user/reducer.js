const initialState = {
    authenticated: false
};

function updateDroneStatus(state, droneStatus) {
    return {
        ...state,
        droneOnline: droneStatus,
        cockpitLoading: false
    };
}

export default function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        // case UPDATE_DRONE_STATUS_DELTA:
        //     return updateDroneStatus(state, action.payload);
        default:
            return state;
    }
}
