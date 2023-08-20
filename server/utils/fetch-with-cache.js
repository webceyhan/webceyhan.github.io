const cache = useStorage('cache');

export const fetchWithCache = async (url, options = {}) => {
    // get cached data for given url
    const cache = await useUrlCache(url);

    const { headers, status, _data } = await $fetch.raw(url, {
        ...options,
        headers: {
            ...options?.headers,
            'If-None-Match': cache.etag,
        },
    });

    // purge cache with fresh data
    if (status === 200) {
        console.log('serving fresh data');
        cache.refresh(headers.get('etag'), _data);
    }

    // serve cached data for below status codes:
    // 304 Not Modified
    // 403 Forbidden ...
    return cache.data;
};
