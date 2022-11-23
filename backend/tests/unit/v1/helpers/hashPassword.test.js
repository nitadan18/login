// src/api/v1/helper/hashPassword.ts

const hashPassword = require('../../../../src/api/v1/helper/hashPassword');

describe('hashPassword test', () => {
    it('should return a string with 60 chars', async () => {
        const password = 'password';
    
        const result = await hashPassword(password);

        expect(result.length).toEqual(60);
    });
});