import { fetchResponse } from './cache';

export const IS_DEV = import.meta.env.DEV;

export const timestamp = (date) => {
    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return formatter.format(new Date(date));
};

export const makeUrl = (url, search = {}) => {
    const urlObject = new URL(url);
    urlObject.search = new URLSearchParams(search);

    return urlObject;
};

export const fetchJson = async (url, search = {}) =>
    (await fetchResponse(makeUrl(url, search))).json();
