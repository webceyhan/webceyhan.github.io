// define prefix for cache names
const PREFIX = 'ceyhanIO-';

// generate cache version based on current date
// this will force cache to refresh every day
const VERSION = new Date().toISOString().split('T')[0];

// generate cache name
const NAME = `${PREFIX}${VERSION}`;

// METHODS /////////////////////////////////////////////////////////////////////////////////////////

export async function fetchResponse(url) {
    // try to get response from the cache
    let cachedResponse = await getCachedResponse(url);

    // return cached response if available
    if (cachedResponse) {
        console.log('Retrieved cached response');
        return cachedResponse;
    }

    // or fetch fresh response
    console.log('Fetching fresh response');

    const cacheStorage = await caches.open(NAME);
    await cacheStorage.add(url);

    return await getCachedResponse(url);
}

async function getCachedResponse(url) {
    const cacheStorage = await caches.open(NAME);
    return await cacheStorage.match(url);
}

/**
 * Purge expired caches to force a refresh.
 */
export async function purgeExpiredCaches(force = false) {
    // get all cache keys
    const cacheNames = await caches.keys();

    await Promise.all(
        cacheNames
            // filter out caches that don't match the prefix
            .filter((name) => name.startsWith(PREFIX))
            // filter out current cache
            .filter((name) => !force && name !== NAME)
            // delete all other caches
            .map((name) => caches.delete(name))
    );
}

// INIT ////////////////////////////////////////////////////////////////////////////////////////////
purgeExpiredCaches();
