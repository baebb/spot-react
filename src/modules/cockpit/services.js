// NPM Dependencies
import Amplify, { PubSub, Auth, Logger } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import uuidv4 from 'uuid/v4';

import apiConfig from 'config/api';

import { aws_exports as awsExports } from '../../aws-exports';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

// Library Dependencies
// import { httpClient } from 'lib/api-client';

const { awsRegion, awsPubsubEndpoint } = apiConfig;

const improvedExports = {
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'ap-northeast-1:58107a62-8e2f-435c-a97d-f147edfb3270',
        // REQUIRED - Amazon Cognito Region
        region: 'ap-northeast-1',
        userPoolId: 'ap-northeast-1_ANny9JOUh',
        userPoolWebClientId: '40sob4qg7k8icdelqp68tt88ff',
        mandatorySignIn: false
    },
    PubSub: { clientId: uuidv4() }
};

export const configureAuth = () => Amplify.configure(improvedExports);

export const configurePubSub = () =>
    Amplify.addPluggable(new AWSIoTProvider({
        aws_pubsub_region: awsRegion,
        aws_pubsub_endpoint: awsPubsubEndpoint
    }));

export const sendControl = ({ control }) => PubSub.publish('control', { msg: control });

