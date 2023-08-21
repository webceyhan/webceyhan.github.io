import { API_URL, API_HEADERS } from '../constants/github';
import { Data, EtagList, Query } from '../types/api';

const urlEtags: EtagList = {};

export async function fetchGithubApi(path: string, query: Query = {}) {
    const url = makeUrl(path, query);
    const etag = urlEtags[url];

    try {
        // fetch from github api if fresh data is available
        const { headers, status, _data } = await $fetch.raw(url, {
            headers: {
                ...API_HEADERS,
                'If-None-Match': etag,
            },
        });

        if (status === 200) {
            // update etag and return fresh data
            urlEtags[url] = headers.get('etag') as string;
            return _data as Data;
        }
    } catch (error) {}

    return null;
}

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const makeUrl = (path: string, query: Query = {}): string => {
    // create url object
    const url = new URL(API_URL + path);

    // add query params
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, `${value}`);
    });

    return url.toString();
};
