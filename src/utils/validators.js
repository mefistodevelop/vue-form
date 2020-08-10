import { helpers } from 'vuelidate/lib/validators'

export const length = (length) => (value) => !helpers.req(value) || value.length === length;

export const firstCharIs = (char) => (value) => {
  const regex = new RegExp(`^${char}`);
  return !helpers.req(value) || regex.test(value);
};