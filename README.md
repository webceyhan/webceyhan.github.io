<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/github-code-scanning/codeql)
[![Build and Deploy](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/deploy.yml)

<!-- LOGO (OPTIONAL) -->

![Logo](./public/img/company-logo.png)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Personal Landing Page

This is a personal landing page which is served at [ceyhan.cloud](https://www.ceyhan.cloud/).
It contains a short personal introduction and list of projects i developed on GitHub.
All data is dynamically fetched from GitHub REST API.
Feel free to use it as your own landing page if you like.

[View Demo](https://webceyhan.github.io) |
[Report Issue](https://github.com/webceyhan/webceyhan.github.io/issues) |
[Request Feature](https://github.com/webceyhan/webceyhan.github.io/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Bun](https://bun.sh/) first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/webceyhan.github.io.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd webceyhan.github.io
    ```
3. Install packages.
    ```sh
    bun install
    ```
4. Set your social link handles in .env file.
    ```sh
    # social-link handles
    USER_GITHUB=
    USER_REDDIT=
    USER_LINKEDIN=
    USER_TWITTER=
    USER_INSTAGRAM=
    ```
5. Setup your GitHub profile settings to show in header section.
   `sh
    name=       # Your Name
    bio=        # Your Job Description
    location=   # Where You're based in
    company=    # Where you work at (optional)
    `
    > If you like to use a company logo instead of text, you can put a company-logo.png under the assets folder which will be automatically rendered.

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
bun run dev             # start development server
bun run build           # build for production
bun run preview         # preview built application
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>

<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Start the development server to watch changes while you code.

```sh
bun run dev
```

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the application for production.

```sh
bun run build
```

You can also preview the application after building it.

```sh
bun run preview
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (GitHub Pages)

A GitHub Action will automatically deploy the project to GitHub Pages on every push.

The workflow will build the project using bun and output the result to the `dist` folder which will be then pushed to the `gh-pages` branch.

> See the details in [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Vue.js](https://vuejs.org/)
-   [Nuxt.js](https://nuxtjs.org/)
-   [DaisyUI](https://daisyui.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Bootstrap Icons](https://icons.getbootstrap.com/)
-   [GitHub REST API](https://docs.github.com/en/rest)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [GitHub Pages](https://pages.github.com/)
    -   [github-pages-deploy-action](https://github.com/JamesIves/)
