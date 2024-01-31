const otpGenerator = require("otp-generator");
function generateOtp() {
  const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  if (!otp) throw new Error("Otp not generated !");

  return otp;
}

module.exports = generateOtp;
