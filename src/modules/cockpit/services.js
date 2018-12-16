// NPM Dependencies
import PubNub from 'pubnub';

import apiConfig from 'config/api';

const { pubnubPublishKey, pubnubSubscribeKey } = apiConfig;

let pubnub;

export const configurePubSub = () => {
    pubnub = new PubNub({
        publishKey: pubnubPublishKey,
        subscribeKey: pubnubSubscribeKey
    });

    pubnub.subscribe({
        channels: ['controls']
    });

    return new Promise((resolve, reject) => {
        pubnub.addListener({
            status: statusEvent => (statusEvent.category === 'PNConnectedCategory' ?
                resolve(statusEvent) : reject(statusEvent))
        });
    });
};

// export const connectToChannel = () => {
//     channel = socket.subscribe('private-controls');
//
//     return new Promise((resolve, reject) => {
//         channel.bind('pusher:subscription_succeeded', () => resolve());
//         channel.bind('pusher:subscription_error', error => reject(error));
//     });
// };


export const sendControl = ({ control }) => new Promise((resolve, reject) => {
    pubnub.publish(
        { message: { control }, channel: 'controls' },
        status => (status.error ? reject(status) : resolve(status))
    );
});

