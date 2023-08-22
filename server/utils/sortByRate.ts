type Sortable<T> = T & { rate: number };

export const sortByRate = <T>(items: Sortable<T>[]) =>
    items.sort((a, b) => b.rate - a.rate);
