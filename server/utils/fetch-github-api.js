import { API_URL, API_HEADERS } from '../constants/github';

export async function fetchGithubApi(path, query = {}) {
    // create url object
    const url = makeUrl(path, query);
    const cache = await useUrlCache(url);

    const { headers, status, _data } = await $fetch.raw(url, {
        headers: {
            ...API_HEADERS,
            'If-None-Match': cache.etag,
        },
    });

    // purge cache with fresh data
    if (status === 200) {
        console.log('serving fresh data');
        cache.refresh(headers.get('etag'), _data);
        console.log('remaining requests', headers.get('x-ratelimit-remaining'));
    }
    else {
        console.log('serving cached data');
    }

    // serve cached data for below status codes:
    // 304 Not Modified
    // 403 Forbidden ...
    return cache.data;
}

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const makeUrl = (path, query = {}) => {
    // create url object
    const url = new URL(API_URL + path);

    // add query params
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    return url;
};
