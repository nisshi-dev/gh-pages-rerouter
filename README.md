# GitHub Pages Rerouter

This repository is a project that uses Cloudflare Workers to implement a reverse proxy for a GitHub Pages site. It allows you to redirect the path of GitHub Pages to `[customDomain]/[customPath]`.

### English | [Japanese](./README-ja.md)

## Usage

```shell
git clone git@github.com:nisshi-dev/gh-pages-rerouter.git
npm i
npm run start # Start dev server
npm run deploy # Deploy to Cloudflare Workers
```

## License

This project is released under the [MIT License](./LICENSE).
