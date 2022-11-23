import { createHash } from 'crypto';

const generateHash = (string) => {
    return createHash('sha256').update(string).digest('hex');
};

export default generateHash;
