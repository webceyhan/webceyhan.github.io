export const useProfile = () =>
    useLazyFetch('/api/profile', {
        default: () => ({}),
    });
