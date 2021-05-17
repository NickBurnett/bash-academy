import { APIResponse } from './schema'
import { cloud } from './cloud'
/**
 * Attempts to register the user in Firestore.
 * 0 - Registration Successful
 * 1 - Registration Failed (email in use)
 * @param email Email
 * @param password Password
 * @returns API Response
 */
export async function register(email: string, password: string): Promise<APIResponse<object>> {
    const res = { code: 0 }
    const db = cloud.firestore
    const doc = db.doc(`users/${email}`)
    const query = await doc.get()
    if (query.exists) {
        res.code = 1
    } else {
        await doc.set({ username: email, password })
    }
    return res
}