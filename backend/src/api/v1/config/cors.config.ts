import toArrayAllowedOrigins from '../helper/allowOrigins';

const corsOptions = {
    origin: toArrayAllowedOrigins,
    optionsSuccessStatus: 200,
};

export default corsOptions;
