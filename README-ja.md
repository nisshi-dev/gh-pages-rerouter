# GitHub Pages Rerouter

このリポジトリは、Cloudflare Workersを利用してGitHub Pagesのサイトをリバースプロキシするプロジェクトです。GitHub Pagesのパスを`[customDomain]/[customPath]`下にリダイレクトすることができます。

### [English](./README.md) | 日本語

## 使い方

```shell
git clone git@github.com:nisshi-dev/gh-pages-rerouter.git
npm i
npm run start # ローカル開発サーバーを起動
npm run deploy # Cloudflare Workersにデプロイ
```

## ライセンス

このプロジェクトは[MITライセンス](./LICENSE)のもとで公開されています。
