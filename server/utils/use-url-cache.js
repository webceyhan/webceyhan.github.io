const cache = useStorage('url-cache');

export const useUrlCache = async (url) => {
    // get cached data if available or empty object
    let item = (await cache.getItem(url)) ?? {};

    return {
        get etag() {
            return item?.etag;
        },

        get data() {
            return item?.data;
        },

        refresh(etag, data) {
            item = { etag, data };
            return cache.setItem(url, item);
        },
    };
};
