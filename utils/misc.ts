export const timestamp = (date: string) => {
    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return formatter.format(new Date(date)) as string;
};
