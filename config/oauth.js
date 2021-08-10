import OAuth from 'oauth-1.0a';
import { createHmac } from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const CONSUMERKEY = process.env.consumer_key;
const CONSUMERSECRET = process.env.consumer_secret;
const TOKENKEY = process.env.access_token;
const TOKENSECRET = process.env.token_secret;

export const oauth = OAuth({
    consumer: {
        key: CONSUMERKEY,
        secret: CONSUMERSECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
})

export const token = {
    key: TOKENKEY,
    secret: TOKENSECRET,
}