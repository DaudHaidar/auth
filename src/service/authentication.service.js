const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { s, m } = require('time-convert');
const AuthenticationService = (userService) => {
  const { findUserByUsernamePassword } = userService;
  dotenv.config();
  const login = async (payload) => {
    const user = await findUserByUsernamePassword(
      payload.username,
      payload.password
    );
    if (!user) return `Invalid account`;

    // Token
    const { TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM } = process.env;
    const payloadUser = { id: user.id, email: user.email };
    const algorithm = TOKEN_ALGORITHM;
    const key = TOKEN_SECRET;
    const expiresIn = s.from(m)(TOKEN_EXPIRATION);
    // urutan :
    // 1. payload yang ingin dibentuk(public payload)
    // 2. token secret utuk verify signature
    // 3. {expiresIn} untuk masa hidup token (ms,s,m,h,d)
    // 4. callback
    const token = jwt.sign(
      payloadUser,
      key,
      { expiresIn: expiresIn, algorithm: algorithm },
      null
    );
    return token;
  };
  const logout = () => {};
  const forgotPassword = () => {};

  return { login, logout, forgotPassword };
};
module.exports = AuthenticationService;