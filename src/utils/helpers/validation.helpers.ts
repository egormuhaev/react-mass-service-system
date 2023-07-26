export const isRegEmailValid = (email: string): boolean => {
  const emailRegex = /^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/i;
  return emailRegex.test(email);
};

export const lowercaseRegex = (str: string) => {
  const reg = /[a-z]/;
  return reg.test(str);
};

export const uppercaseRegex = (str: string) => {
  const reg = /[A-Z]/;
  return reg.test(str);
};

export const digitRegex = (str: string) => {
  const reg = /[0-9]/;
  return reg.test(str);
};

export const specialCharRegex = (str: string) => {
  const reg = /[@#$%^&+=!]/g;
  return reg.test(str);
};

export const passwordComplexity = (password: string): number => {
  let complexity = 0;
  if (lowercaseRegex(password)) {
    complexity += 1;
  }
  if (uppercaseRegex(password)) {
    complexity += 1;
  }
  if (digitRegex(password)) {
    complexity += 1;
  }
  if (specialCharRegex(password)) {
    complexity += 1;
  }
  complexity +=
    Math.floor((password.length / 8) * 2) > 6
      ? 6
      : Math.floor((password.length / 8) * 2);
  return complexity;
};
