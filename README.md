# Simple Blog (Personalized)

A customized version of the [Simple Blog](https://lume.land/theme/simple-blog/) theme for [Lume](https://lume.land), the static site generator for Deno.

## About

This project is a personal adaptation of the original Simple Blog theme, created by [@lumeland](https://github.com/lumeland).  
**Many thanks to the original developer for their excellent work!**  
This version includes my own design and feature tweaks for my personal blog.

## Features

- Supports tags and post authors
- Atom and JSON feeds
- Sitemap and SEO features
- Instant search engine
- Custom design and enhancements

## Getting Started

### 1. Set up a new site

The easiest way to use this theme is with the [Lume init command](https://deno.land/x/lume_init):

```bash
deno run -A https://lume.land/init.ts --theme=simple-blog
```

Or, to use this customized version, clone this repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Configure your site

Edit the [`src/_data.yml`](./src/_data.yml) file to set your site title, description, and metadata.

Add your posts to the `posts` folder (e.g., `posts/my-first-post.md`).

### 3. Build and preview

```bash
deno task lume
```

Then open the generated `_site` folder in your browser.

## Credits

- **Theme:** Based on [Simple Blog](https://lume.land/theme/simple-blog/) by [@lumeland](https://github.com/lumeland)
- **Framework:** [Lume](https://lume.land) static site generator

## License

See [LICENSE](./LICENSE) for details.
