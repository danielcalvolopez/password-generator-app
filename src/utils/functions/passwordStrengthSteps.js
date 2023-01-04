const passwordStrengthSteps = (
  characterLength,
  setPasswordStrength,
  passwordStrengths
) => {
  if (characterLength <= 12) {
    setPasswordStrength(passwordStrengths.medium);
  }
  if (characterLength <= 8) {
    setPasswordStrength(passwordStrengths.weak);
  }
  if (characterLength <= 4) {
    setPasswordStrength(passwordStrengths.tooWeak);
  }
  if (characterLength > 12) {
    setPasswordStrength(passwordStrengths.strong);
  }
};

export default passwordStrengthSteps;
