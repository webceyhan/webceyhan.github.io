const AVAILABLE_LINKS = [
    {
        icon: 'github',
        url: 'https://github.com',
        id: process.env.USER_GITHUB,
    },
    {
        icon: 'reddit',
        url: 'https://www.reddit.com/user',
        id: process.env.USER_REDDIT,
    },
    {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in',
        id: process.env.USER_LINKEDIN,
    },
    {
        icon: 'twitter',
        url: 'https://twitter.com',
        id: process.env.USER_TWITTER,
    },
    {
        icon: 'instagram',
        url: 'https://www.instagram.com',
        id: process.env.USER_INSTAGRAM,
    },
];

export default defineEventHandler((event) => {
    return AVAILABLE_LINKS.filter(havingId).map(normalizeUrl);
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const havingId = ({ id }) => !!id;

const normalizeUrl = (link) => ({
    ...link,
    url: `${link.url}/${link.id}`,
});
