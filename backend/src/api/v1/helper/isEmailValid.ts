const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const isEmailValid = (email: string) => {
    if (!email) {
        return false;
    }

    if (email.length > 254) {
        return false;
    }

    const checkEmailRegex = emailRegex.test(email);
    if (!checkEmailRegex) {
        return false;
    }

    const parts = email.split('@');
    if (parts[0].length > 64) {
        return false;
    }

    const domainParts = parts[1].split('.');
    if (
        domainParts.some(function (part) {
            return part.length > 63;
        })
    ) {
        return false;
    }

    return true;
};

module.exports = isEmailValid;
