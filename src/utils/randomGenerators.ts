export const generateRandomString = () =>
  Math.random()
    .toString(36)
    .substring(7);

export const generateRandomNumber = () => Math.floor(Math.random() * 10);
