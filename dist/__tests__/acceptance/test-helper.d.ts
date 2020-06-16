import { Pj6969BeApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Pj6969BeApplication;
    client: Client;
}
