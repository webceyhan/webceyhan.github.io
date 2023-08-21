export type Data = any[] | { [key: string]: any };

export type Query = {
    [key: string]: string | number | boolean;
};

export type EtagList = {
    [url: string]: string;
};
