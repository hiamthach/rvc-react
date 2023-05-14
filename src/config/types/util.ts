export type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
