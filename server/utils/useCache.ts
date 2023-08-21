const cache = useStorage('url-cache');

export async function useCache<T>(url: string) {
    let value = (await cache.getItem(url)) as T;

    return {
        get value() {
            return value;
        },
        set value(newValue: T) {
            // update cache asynchronously
            cache.setItem(url, newValue as any);
            value = newValue; // set value
        },
    };
}
