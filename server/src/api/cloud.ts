import { Firestore } from '@google-cloud/firestore'
import { config } from 'dotenv'
config()
export class Cloud {
    public firestore: Firestore;
    constructor() {
        this.firestore = new Firestore({
            projectId: process.env.PROJECT_ID,
            credentials: {
                client_email: process.env.USERNAME_FIRESTORE,
                private_key: process.env.API_KEY_FIRESTORE
            }
        })
    }
}
export const cloud = new Cloud()