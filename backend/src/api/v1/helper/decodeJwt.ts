import jwt from 'jsonwebtoken';

const decodeJwt = (token: string) => {
    const jwtDecoded = jwt.decode(token, { complete: true });
    return jwtDecoded.payload;
};

module.exports = decodeJwt;
