export const timestamp = (date: string) => {
    if (!date) return new Date().getTime();

    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return formatter.format(new Date(date));
};

export const makeUrl = (url: string, search = {}) => {
    const urlObject = new URL(url);
    urlObject.search = new URLSearchParams(search).toString();

    return urlObject;
};
