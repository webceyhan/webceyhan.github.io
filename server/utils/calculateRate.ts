export const calculateRate = (value: number, total: number) =>
    +((value / total) * 100).toFixed(1);
