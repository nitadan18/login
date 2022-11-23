// src/api/v1/helper/verifyPassword.ts

const verifyPassword = require('../../../../src/api/v1/helper/verifyPassword');

describe('verify password', () => {
    it('should return false', async () => {
        const password = 'password';
        const hashPassword = 'hash_password';
    
        const result = await verifyPassword(password, hashPassword);
        
        expect(result).toBe(false);
    });

    it('should return true', async () => {
        const password = 'password';
        const hashPassword = '$2b$10$uyvjjPGkfMig7h4H3gD0Zek5te2fZdt8q.p/rhq7wymMpw.rNqHeu';
    
        const result = await verifyPassword(password, hashPassword);

        expect(result).toBe(true);
    });
});