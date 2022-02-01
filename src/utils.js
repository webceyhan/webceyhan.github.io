export const IS_DEV = import.meta.env.DEV;

export const timestamp = (date) => new Date(date).toLocaleDateString();

export const fetchJson = async (url) => (await fetch(url)).json();
