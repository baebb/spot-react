// NPM Dependencies
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

// Library Dependencies
import { httpClient } from 'lib/api-client';

export const  configurePubSub = () =>
    Amplify.addPluggable(new AWSIoTProvider({
        aws_pubsub_region: '<YOUR-AWS-REGION>',
        aws_pubsub_endpoint: 'a2r1akzjw3tmq9-ats.iot.ap-northeast-1.amazonaws.com'
    }));
