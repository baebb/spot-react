// NPM Dependencies
import Pusher from 'pusher-js';

import apiConfig from 'config/api';

Pusher.logToConsole = true;

const { pusherAppKey, pusherCluster } = apiConfig;

let socket, channel;

export const configurePubSub = () => {
    socket = new Pusher(pusherAppKey, {
        cluster: pusherCluster,
        forceTLS: true
    });
    return new Promise(resolve =>
        socket.connection.bind('connected', () =>
            resolve(socket)
        ));
    // channel = socket.subscribe('controls');
};


// export const sendControl = ({ control }) => PubSub.publish('control', { msg: control });

