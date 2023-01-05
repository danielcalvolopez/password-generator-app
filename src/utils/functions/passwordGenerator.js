const passwordGenerator = (
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  characterLength,
  setPassword,
  setPasswordhasChanged
) => {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  if (includeLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    characters += "0123456789";
  }
  if (includeSymbols) {
    characters += "|!@·#$%&*()/=?¿'¡+*Ç[]}{_-.:,;<>ºª";
  }
  let password = "";
  for (let i = 0; i < characterLength; i++) {
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];

    password += randomChar;
  }
  setPassword(password);
  setPasswordhasChanged(true);
};

export default passwordGenerator;
