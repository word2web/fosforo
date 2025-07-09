# Simple Blog (Personalized)

A Bootstrap enabled theme for my personal website and blog suitable for [Lume](https://lume.land), the static site generator for Deno.

## About

This project is a personal adaptation of the original Simple Blog theme, created by [@lumeland](https://github.com/lumeland).  
**Obrigado to the original developer for his excellent work!**  
This version includes my own design and feature tweaks for my personal blog - because I am not a designer I have adopted Bootstrap.

## Features

- Supports tags and post authors
- Atom and JSON feeds
- Sitemap and SEO features
- Instant search engine
- Custom design and enhancements
- Bootstrap

## Getting Started

### 1. Clone this repository

To use this customized theme, clone this repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Install dependencies

If your project uses any dependencies (for example, with npm for scripts or tooling), install them:

```bash
npm install
```
*(Skip this step if you do not use npm or node dependencies.)*

### 3. Configure your site

Edit the [`src/_data.yml`](./src/_data.yml) file to set your site title, description, and metadata.

Add your posts to the `posts` folder (e.g., `posts/my-first-post.md`).

### 4. Build and preview

```bash
deno task lume
```

Then open the generated `_site` folder in your browser.

---

## Credits

- **Theme:** Originally inspired by [Simple Blog](https://lume.land/theme/simple-blog/) by [@lumeland](https://github.com/lumeland), now heavily customized. Obrigado [Óscar Otero](https://oscarotero.com/)
- **Framework:** [Lume](https://lume.land) static site generator

## License

See [LICENSE](./LICENSE) for details.
