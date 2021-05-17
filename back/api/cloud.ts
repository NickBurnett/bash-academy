import { Firestore } from '@google-cloud/firestore'
import { env } from '../index'
export class Cloud {
    public firestore: Firestore;
    constructor() {
        this.firestore = new Firestore({
            projectId: env.PROJECT_ID,
            credentials: {
                client_email: env.USERNAME_FIRESTORE,
                private_key: env.API_KEY_FIRESTORE
            }
        })
    }
}
export const cloud = new Cloud()