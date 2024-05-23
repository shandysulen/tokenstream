export type UndefinedProperties<T> = {
  [P in keyof T]: undefined;
};
