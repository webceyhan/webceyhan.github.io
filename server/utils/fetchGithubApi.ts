import { API_URL, API_HEADERS } from '../constants/github';

type Query = Record<string, number | string | boolean>;

export async function fetchGithubApi<T>(path: string, query: Query = {}) {
    return $fetch(API_URL + path, {
        query,
        headers: API_HEADERS,
    }) as T;
}

// const urlEtags: Record<string, string> = {};

// export async function fetchGithubApi<T>(path: string, query: Query = {}) {
//     const url = makeUrl(path, query);
//     const etag = urlEtags[url];

//     try {
//         // fetch from github api if fresh data is available
//         const { headers, status, _data } = await $fetch.raw(url, {
//             headers: {
//                 ...API_HEADERS,
//                 'If-None-Match': etag,
//             },
//         });

//         if (status === 200) {
//             // update etag and return fresh data
//             urlEtags[url] = headers.get('etag') as string;
//             return _data as T;
//         }
//     } catch (error) {}

//     return null;
// }
