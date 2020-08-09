export const length = (length) => (value) => value && value.length !== length;

export const firstCharIs = (char) => (value) => {
  const regex = new RegExp(`^${char}`);
  return value && !regex.test(value);
};