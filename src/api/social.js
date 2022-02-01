const LINKS = [
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

// return filtered and built links
export const getSocialLinks = () =>
    LINKS.filter((link) => !!link.id).map((link) => ({
        ...link,
        url: `${link.url}/${link.id}`,
    }));
