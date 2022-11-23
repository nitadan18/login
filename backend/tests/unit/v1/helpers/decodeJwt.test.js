// src/api/v1/helper/decodeJwt.ts

const decodeJwt = require('../../../../src/api/v1/helper/decodeJwt');

describe('decode jwt', () => {
    it('should return object with payload', () => {
        const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3Q3QHRlc3QuY29tIiwiaWF0IjoxNjY5MDgxMzcxLCJleHAiOjE2NjkwODMxNzF9.WptzKRB4cz81Z8uQRgm27S1UJ70oMY1NwpBP5OLXGY4';
        const payload = { username: 'test7@test.com', iat: 1669081371, exp: 1669083171 };

        const result = decodeJwt(jwt);

        expect(result).toEqual(payload);
    });
});