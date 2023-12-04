import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['night'],
        darkTheme: 'night',
    },
} satisfies Config;
