const allowedOrigins = process.env.CORS_URLS_LIST || '';

const toArrayAllowedOrigins = allowedOrigins
    .split(',')
    .map((url) => url.trim());

export default toArrayAllowedOrigins;
