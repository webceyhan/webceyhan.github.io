import LINKS from '../data/social-links';

export default defineEventHandler((event) => {
    return LINKS.filter(havingId).map(normalizeUrl);
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const havingId = ({ id }) => !!id;

const normalizeUrl = (link) => ({
    ...link,
    url: `${link.url}/${link.id}`,
});
