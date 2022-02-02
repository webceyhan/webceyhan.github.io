import { computed } from 'vue';

// define constants
const AVAILABLE_LINKS = [
    {
        icon: 'github',
        url: 'https://github.com',
        id: import.meta.env.VITE_USER_GITHUB,
    },
    {
        icon: 'reddit',
        url: 'https://www.reddit.com/user',
        id: import.meta.env.VITE_USER_REDDIT,
    },
    {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in',
        id: import.meta.env.VITE_USER_LINKEDIN,
    },
    {
        icon: 'twitter',
        url: 'https://twitter.com',
        id: import.meta.env.VITE_USER_TWITTER,
    },
    {
        icon: 'instagram',
        url: 'https://www.instagram.com',
        id: import.meta.env.VITE_USER_INSTAGRAM,
    },
];

// define getters
const links = computed(() =>
    AVAILABLE_LINKS.filter(({ id }) => !!id).map(({ icon, url, id }) => ({
        icon,
        url: `${url}/${id}`,
    }))
);

// public API
export function useSocial() {
    return { links };
}
