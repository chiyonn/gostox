export const validateStatus = (value: unknown): boolean => {
    return typeof value === 'string' && (
        value === "商標あり" ||
        value === "サイズ不明" ||
        value === "登録不可"
    );
};

export const validateZeroOrMore = (value: unknown): boolean => {
    return typeof value === 'number' && value >= 0;
};

export const validateDateISO = (value: unknown): boolean => {
    return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
};

