export const isRegEmailValid = (email: string): boolean => {
  const emailRegex = /^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/i;
  return emailRegex.test(email);
};

export const passwordComplexity = (password: string): number => {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[@#$%^&+=!]/g;

  let complexity = 0;
  if (lowercaseRegex.test(password)) {
    complexity += 1;
  }
  if (uppercaseRegex.test(password)) {
    complexity += 1;
  }
  if (digitRegex.test(password)) {
    complexity += 1;
  }
  if (specialCharRegex.test(password)) {
    complexity += 1;
  }
  complexity +=
    Math.floor((password.length / 8) * 2) > 6
      ? 6
      : Math.floor((password.length / 8) * 2);
  return complexity;
};
