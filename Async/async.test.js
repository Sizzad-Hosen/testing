import { it, expect, describe, beforeAll, afterAll } from 'vitest';
import CryptoJS from "crypto-js";
import { encryptMessagePromise } from './async.js';

beforeAll(() => {
    console.log("Starting Async Function Tests");
});

afterAll(() => {
    console.log("Completed Async Function Tests");
});

describe('Async Function Tests', () => {

    it('should resolve with correct encrypted data', async () => {
        const message = 'Hello World';
        const key = 'secretkey';

        const data = await encryptMessagePromise(message, key);
        expect(data).toBeDefined();
        expect(typeof data).toBe('string');

        const decryptedMessage = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
        expect(decryptedMessage).toBe(message);
    });

    it('should reject when message is empty', async () => {
        // If encryptMessagePromise rejects for empty string
        await expect(encryptMessagePromise('', 'secretkey')).rejects.toBe('Encryption failed');
    });

});
