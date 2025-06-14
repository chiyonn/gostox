export const validateStatus = (value: string): boolean => {
  return value === "商標あり" || value === "サイズ不明" || value === "登録不可";
};

export const validateZeroOrMore = (value: number): boolean => {
  return value >= 0;
};

export const validateDateISO = (value: string): boolean => {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
};
