export interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    homepage: string;
    html_url: string;
    forks: number;
    watchers: number;
    open_issues: number;
    topics: string[];
    languages: string[];
    created_at: string;
    updated_at: string;
    pushed_at: string;
}

export interface Language {
    name: string;
    lines: number;
    rate: number | string;
    color: string | null;
}
