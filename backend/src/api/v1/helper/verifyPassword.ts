import bcrypt from 'bcrypt';

const verifyPassword = async (password: string, hashString: string) => {
    const match = await bcrypt.compare(password, hashString);
    return match;
};

module.exports = verifyPassword;
