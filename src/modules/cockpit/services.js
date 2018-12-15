// NPM Dependencies
import Pusher from 'pusher-js';

import apiConfig from 'config/api';

Pusher.logToConsole = true;

const { pusherAppKey, pusherCluster } = apiConfig;

let socket;
let channel;

export const configurePubSub = () => {
    socket = new Pusher(pusherAppKey, {
        cluster: pusherCluster,
        forceTLS: true
    });

    return new Promise((resolve, reject) => {
        socket.connection.bind('connected', () => resolve());
        socket.connection.bind('error', error => reject(error));
        socket.connection.bind('failed', error => reject(error));
    });
};

export const connectToChannel = () => {
    channel = socket.subscribe('controls');

    return new Promise((resolve, reject) => {
        channel.bind('pusher:subscription_succeeded', () => resolve());
        channel.bind('pusher:subscription_error', error => reject(error));
    });
};


// export const sendControl = ({ control }) => PubSub.publish('control', { msg: control });

