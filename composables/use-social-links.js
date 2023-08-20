export const useSocialLinks = () =>
    useLazyFetch('/api/social-links', {
        default: () => [],
    });
