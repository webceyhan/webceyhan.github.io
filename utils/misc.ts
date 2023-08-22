export const timestamp = (date: string) => {
    if (!date) return new Date().getTime();

    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return formatter.format(new Date(date));
};


