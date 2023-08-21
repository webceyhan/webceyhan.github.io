import { LINKS } from '../constants/social';
import { SocialLink } from '../types/social';

export default defineEventHandler((event) => {
    return LINKS.filter(havingId).map(normalizeUrl);
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const havingId = (link: SocialLink): boolean => !!link.id;

const normalizeUrl = (link: SocialLink): SocialLink => ({
    ...link,
    url: `${link.url}/${link.id}`,
});
