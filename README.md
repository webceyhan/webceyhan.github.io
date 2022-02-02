[![Build and Deploy](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/webceyhan/webceyhan.github.io/actions/workflows/build-deploy.yml)

<!-- Logo -->

![Logo](./src/assets/company-logo.png)

 <!-- Title -->

# CEYHAN I/O Landing Page

<!-- Description -->

This is a personal landing page which is served at [ceyhan.io](https://www.ceyhan.io/).
It contains a short personal introduction and list of projects i developed on GitHub. All data is dynamically fetched from GitHub REST API.
Feel free to use it as your own landing page if you like.

[View Demo](https://webceyhan.github.io) |
[Report Issue](https://github.com/webceyhan/webceyhan.github.io/issues) |
[Request Feature](https://github.com/webceyhan/webceyhan.github.io/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- Built With -->

## Built With

-   [Node.js](https://nodejs.dev/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [Bootstrap Icons](https://icons.getbootstrap.com/)
-   [GitHub REST API](https://docs.github.com/en/rest)

<br>
<!-- Prerequisites -->

## Prerequisites

You need to install the [Node.js](https://nodejs.dev/) and npm package manager first.

```sh
npm install npm@latest -g
```

> Recommended IDE settings:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- Installation -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/webceyhan.github.io.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd <project folder>
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```
4. Set your social link handles in .env file.
    ```sh
    # social-link handles
    VITE_USER_GITHUB=
    VITE_USER_REDDIT=
    VITE_USER_LINKEDIN=
    VITE_USER_TWITTER=
    VITE_USER_INSTAGRAM=
    ```
5. Setup your GitHub profile settings to show in header section.
    ```sh
    name=       # Your Name
    bio=        # Your Job Description
    location=   # Where You're based in
    company=    # Where you work at (optional)
    ```
> If you like to use a company logo instead of text, you can put a company-logo.png under the assets folder which will be automatically rendered.

<br>
<!-- Usage Examples -->

## Usage

You can use following commands to do various task with the project.

```sh
npm run dev         # start development server
npm run build       # build for production
npm run preview     # preview built app
```

<br>
<!-- Roadmap -->

## Roadmap

-   [x] State management
-   [ ] Project sort options
-   [x] DotEnv configuration

> See the [open issues](https://github.com/webceyhan/webceyhan.github.io/issues) for a full list of proposed features (and known issues).

<br>
<!-- Acknowledgments -->

## Acknowledgments

-   Project hosted on [GitHub Pages](https://pages.github.com/)
-   Project deployed with [GitHub Actions](https://docs.github.com/en/actions)
    -   using [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
-   Data provided by [GitHub REST API](https://docs.github.com/en/rest)
