const verify = (password) => {
  return password &&
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    !/\s/.test(password)
    ? "Password accepted"
    : "Password rejected";
};

module.exports = verify;

// console.log(verify(null));
