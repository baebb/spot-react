// NPM Dependencies
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

import apiConfig from 'config/api';

// Library Dependencies
// import { httpClient } from 'lib/api-client';

const { awsRegion, awsPubsubEndpoint } = apiConfig;

export const configurePubSub = () =>
    Amplify.addPluggable(new AWSIoTProvider({
        aws_pubsub_region: awsRegion,
        aws_pubsub_endpoint: awsPubsubEndpoint
    }));

export default configurePubSub;
