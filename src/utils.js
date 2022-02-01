export const IS_DEV = import.meta.env.DEV;

export const timestamp = (date) => new Date(date).toLocaleDateString();

export const makeUrl = (url, search = {}) => {
    const urlObject = new URL(url);
    urlObject.search = new URLSearchParams(search);

    return urlObject;
};

export const fetchJson = async (url, search = {}) =>
    (await fetch(makeUrl(url, search))).json();
