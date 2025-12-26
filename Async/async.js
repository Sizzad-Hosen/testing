// Correct import
import CryptoJS from "crypto-js";

// Callback-based encryption
export function encryptMessage(message, key, callback) {
    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!message) return reject("Encryption failed");

            const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
            resolve(encryptedMessage);
        }, 2000);
    });
}
