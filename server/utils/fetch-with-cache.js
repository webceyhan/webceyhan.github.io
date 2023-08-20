const cache = useStorage('cache');

export const fetchWithCache = async (url, options = {}) => {
    // get cached data if available
    const cachedItem = (await cache.getItem(url)) ?? {};

    const { headers, status, _data } = await $fetch.raw(url, {
        headers: { 'If-None-Match': cachedItem?.etag },
        ...options,
    });

    // purge cache with fresh data
    if (status === 200) {
        console.log('caching fresh data');

        await cache.setItem(url, {
            data: _data,
            etag: headers.get('etag'),
        });
    }

    // serve cached data for below status codes:
    // 304 Not Modified
    // 403 Forbidden ...
    return (await cache.getItem(url))?.data;
};
