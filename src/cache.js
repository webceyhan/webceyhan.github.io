// define prefix for cache names
const PREFIX = 'ceyhanIO-';

// generate cache version based on current date
const VERSION = new Date().toISOString().split('T')[0];

// generate cache name
const NAME = `${PREFIX}${VERSION}`;

// METHODS /////////////////////////////////////////////////////////////////////////////////////////

/**
 * Try to get data from the cache, but fall back to fetching it live.
 */
export async function fetchData(url) {
    // try to get data from the cache
    let cachedData = await getCachedData(url);

    // return cached data if available
    if (cachedData) {
        console.log('Retrieved cached data');
        return cachedData;
    }

    // or fetch fresh data
    console.log('Fetching fresh data');

    const cacheStorage = await caches.open(NAME);
    await cacheStorage.add(url);

    return await getCachedData(url);
}

/**
 * Get request data from the cache.
 */
async function getCachedData(url) {
    const cacheStorage = await caches.open(NAME);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
        return false;
    }
    return await cachedResponse.json();
}

/**
 * Purge expired caches to force a refresh.
 */
export async function purgeExpiredCaches() {
    // get all cache keys
    const cacheNames = await caches.keys();

    await Promise.all(
        cacheNames
            .filter((name) => name.startsWith(PREFIX) && name !== NAME)
            .map((name) => {
                caches.delete(name);
                console.log(`Purged cache: ${name}`);
            })
    );
}

// INIT ////////////////////////////////////////////////////////////////////////////////////////////
purgeExpiredCaches();
