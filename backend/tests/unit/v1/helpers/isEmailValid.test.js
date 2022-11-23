// src/api/v1/helper/isEmailValid.ts

const isEmailValid = require('../../../../src/api/v1/helper/isEmailValid');

describe('isEmailValid - check string format', () => {
    it('should return false - email format', async () => {
        const emailForTest = 'test';
    
        const result = await isEmailValid(emailForTest);
        
        expect(result).toBe(false);
    });

    it('should return false - email format', async () => {
        const emailForTest = 'test';
    
        const result = await isEmailValid(emailForTest);
        
        expect(result).toBe(false);
    });

    it('should return false - string is too long', async () => {
        const emailForTest = 'VGcWH6kzPEiLJ488Ng0iPBVAfXOG2srLEWVBb2qc5XTaap8eZkcZDGtIHkW5LNfYMUUv1gY3V1PRgfdMwCjDqjjMhCyMqBeoKHWvA7CdqRTI8crhMHlD1O0YdGWbzlnM17BTPixIu0s1tUFOSVlZDJlu9lSma7KYMk64LhO7r60BMq6nJXZJwJ6K6gRoWnUcFa16z6dL@xNtWma6VIndZPPMbVqBwUhI0DSI0tNBAWi6PUOIjaAjeqk21BICbq4IozYjs69mzvmrNof93VCmP5OwbAtyrPTca351u3pk5NizJ';
    
        const result = await isEmailValid(emailForTest);

        expect(result).toBe(false);
    });

    it('should return false - empty string', async () => {
        const emailForTest = '';
    
        const result = await isEmailValid(emailForTest);

        expect(result).toBe(false);
    });

    it('should return false - incorect email format', async () => {
        const emailForTest = 'xNtWma6VIndZPPMbVqBwUhI0DSI0tNBAWi6PUOIjaAjeqk21BICbq4IozYjs69mzvmrNof93VCmP5OwbAtyrPTca351u3pk5NizJ@xNtWma6VIndZPPMbVqBwUhI0DSI0tNBAWi6PUOIjaAjeqk21BICbq4IozYjs69mzvmrNof93VCmP5OwbAtyrPTca351u3pk5NizJ.com';
    
        const result = await isEmailValid(emailForTest);

        expect(result).toBe(false);
    });
});